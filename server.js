const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const next = require('next');
const pathMatch = require('path-match');
const app = next({ dev });
const handle = app.getRequestHandler();
const { parse } = require('url');

const mongoose = require('mongoose');
const promisify = require('es6-promisify');

// const apiRoutes = require('./handlers/router.js');

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

// Connect to our Database and handle an bad connections
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`🚫 🚫 🚫 🚫 → ${err.message}`);
});
console.log(`✅  Mongo DB Connected`);


app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());

  server.use(session({
    secret: 'super-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
  }));

  // server.use('/api', apiRoutes);

  // Server-side
  const route = pathMatch();

  server.get('/journal/:jid', (req, res) => {
    const params = route('/journal/:jid')(parse(req.url).pathname);
    return app.render(req, res, '/journal', params);
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });


  /* eslint-disable no-console */
  server.set('port', process.env.PORT || 7777);
  const container = server.listen(server.get('port'), (err) => {
    if (err) throw err;
    console.log(`🌍   Express running → PORT ${container.address().port}`);
  });
});
