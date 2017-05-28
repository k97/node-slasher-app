// //Express
// const express = require('express');
// const session = require('express-session');
// const mongoose = require('mongoose');
// const MongoStore = require('connect-mongo')(session);
// const path = require('path');
// const bodyParser = require('body-parser');
// const promisify = require('es6-promisify');

// //Next JS
// const next = require('next')
// const pathMatch = require('path-match');

// // create our Express app
// const app = express();
// app.use(express.static(path.join(__dirname, 'static')));

// // Takes the raw requests and turns them into usable properties on req.body
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// // Sessions allow us to store data on visitors from request to request
// // This keeps users logged in and allows us to send flash messages
// app.use(session({
//   secret: process.env.SECRET,
//   key: process.env.KEY,
//   resave: false,
//   saveUninitialized: false,
//   store: new MongoStore({ mongooseConnection: mongoose.connection })
// }));



// // After allllll that above middleware, we finally handle our own routes!

// app.get('/info', (req, res) => {
//   return app.render(req, res, '/info', req.query);
// });




// module.exports = app;

//Dev Stuff
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

const server = express()


app.prepare()
.then(() => {

  // Server-side
  const route = pathMatch();

  server.get('/info', (req, res) => {
    return app.render(req, res, '/info', req.query);
  });


});

module.exports = server;
