const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');

const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const promisify = require('es6-promisify');
const passport = require('passport');

const dev = process.env.NODE_ENV !== 'production';
const next = require('next');
const pathMatch = require('path-match');
const app = next({ dev });
const handle = app.getRequestHandler();
const { parse } = require('url');

require('./models/User');
require('./models/Journal');
require('./models/Project');
require('./handlers/passport');
const authController = require('./controllers/authController');
// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

const apiRouter = require('./handlers/apiRouter');
const { workRoutes } = require('./handlers/helpers');

// Connect to our Database and handle an bad connections
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises

// https://github.com/Automattic/mongoose/issues/4135
mongoose.connection.on('error', err => {
  console.error(`🚫 🚫 🚫 🚫 → ${err.message}`);
});
mongoose.connection.on("connected", () => {
  console.log(`✅  Mongo DB Connected`);
});


app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());
  server.use(
    session({
      secret: 'super-secret-key',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60000 },
      store: new MongoStore({ mongooseConnection: mongoose.connection })
    })
  );


  server.use('/api', apiRouter);

  // Server-side
  const route = pathMatch();


  server.get('/journal', (req, res) => {
    return app.render(req, res, '/journal', req.query);
  });
  server.post('/passphrase/login', authController.login);

  server.get('/journal/:id', (req, res) => {
    console.log(req.params.id);
    const params = route('/journal/:id')(parse(req.url).pathname);
    return app.render(req, res, '/journalDetail', params);
  });

  server.get('/work/:id', authController.isLoggedIn, (req, res) => {
    const projectLink = workRoutes(req.params.id);
    const params = route('/work/:id')(parse(req.url).pathname);
    return app.render(req, res, `/work/${projectLink}`, params);
  });

  server.get('/add/journal', (req, res) => {
    const params = route('/add/journal')(parse(req.url).pathname);
    return app.render(req, res, '/journalAdd', params);
  });

  server.get('/add/work', (req, res) => {
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
