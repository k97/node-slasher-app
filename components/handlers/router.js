const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const { catchErrors } = require('./errorHandlers');

// router.get('/', storeController.myMiddleWare, storeController.homePage);
router.get('/', );

router.get('/stores', catchErrors(storeController.getStores));

module.exports = router;

// Do work here
// router.get('/', (req, res) => {
//   const kay = { name: 'Kay', age: 100, cool: true};
//   // res.json(req.query);
//   // res.send('String can be sent here!');
//   // res.send(req.query.name);
//   // res.send(kay);

//   res.render('hello', {
//     name: 'Bruce Wayne',
//     superhero: 'Batman',
//     title: 'Homepage'
//   });
// });

// router.get('/reverse/:name', (req,res) => {
//   const reverse = [...req.params.name].reverse().join('');
//   res.send(reverse)
// });

// module.exports = router;
