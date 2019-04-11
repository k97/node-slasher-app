const express = require('express');
const next = require('next')

const bodyParser = require('body-parser');
const session = require('express-session');

const pathMatch = require('path-match');
const { parse } = require('url');

const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const promisify = require('es6-promisify');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises

var db = mongoose.connection;
db.on('error', console.error.bind(console, '🚫 🚫 🚫 🚫 → connection error:'));
db.once('open', function() {
  console.log(`✅  Mongo DB Connected`);
});

require('./models/Journal');
require('./models/Project');

const authController = require('./controllers/authController');
const apiRoutes = require('./router/apiRoutes');
const { setProjectPage, onAuthorisedProject } = require('./router/projectRoutes');


app.prepare()
.then(() => {
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

  // Server-side route handling
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

  const port = process.env.PORT || 3000;
  server.listen(port, (err) => {
    if (err) throw err
    console.log(`🌍   Express running → PORT ${port}`);
  })
})
