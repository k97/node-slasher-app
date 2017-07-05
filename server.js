const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');

const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const promisify = require('es6-promisify');

const dev = process.env.NODE_ENV !== 'production';
const next = require('next');
const pathMatch = require('path-match');
const app = next({ dev });
const handle = app.getRequestHandler();
const { parse } = require('url');

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

mongoose.connect(process.env.DATABASE, {
  server: {
    reconnectTries: Number.MAX_VALUE
  }
});
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises

// https://github.com/Automattic/mongoose/issues/4135
mongoose.connection.on('error', err => {
  console.error(`🚫 🚫 🚫 🚫 → ${err.message}`);
});

mongoose.connection.on("connected", () => {
  console.log(`✅  Mongo DB Connected`);
});

require('./models/Journal');
require('./models/Project');

const authController = require('./controllers/authController');
const apiRoutes = require('./router/apiRoutes');
const { setProjectPage, onAuthorisedProject } = require('./router/projectRoutes');

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());
  server.use(
    session({
      secret: process.env.SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60000 },
      store: new MongoStore({ mongooseConnection: mongoose.connection })
    })
  );

  server.use('/api', apiRoutes);

  // Server-side
  const route = pathMatch();

  server.get('/journal', (req, res) => {
    return app.render(req, res, '/journal', req.query);
  });

  server.get('/journal/:id', (req, res) => {
    const params = route('/journal/:id')(parse(req.url).pathname);
    return app.render(req, res, '/journalDetail', params);
  });

  server.get('/work/:id', onAuthorisedProject, (req, res) => {
    const projPage = setProjectPage(req.params.id);
    const params = route('/work/:id')(parse(req.url).pathname);
    return app.render(req, res, `/work/${projPage}`, params);
  });

  server.get('/add/journal', authController.isLoggedIn, (req, res) => {
    const params = route('/add/journal')(parse(req.url).pathname);
    return app.render(req, res, '/journalAdd', params);
  });

  server.get('/add/work', authController.isLoggedIn, (req, res) => {
    const params = route('/add/work')(parse(req.url).pathname);
    return app.render(req, res, '/workAdd', params);
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  // output all uncaught exceptions
  process.on('uncaughtException', err => console.error('uncaught exception:', err));
  process.on('unhandledRejection', error => console.error('unhandled rejection:', error));

  server.set('port', process.env.PORT || 7777);
  const container = server.listen(server.get('port'), err => {
    if (err) throw err;
    console.log(`🌍   Express running → PORT ${container.address().port}`);
  });
});
