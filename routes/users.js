/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */
/* eslint-disable indent */
let express = require('express');
let router = express.Router();
let User = require('../models/user.model').User;
// eslint-disable-next-line space-infix-ops
let userController= require('../controllers/user.controller');
/* GET users listing. */

router.get('/add', userController.addUser);

router.post('/add', userController.saveUser);
// eslint-disable-next-line no-trailing-spaces
router.get('/detailall', userController.getAllUsers); 

router.get('/all', function (req, res, next) {
  res.send('respond with all users');
});

router.post('/login', userController.loginUser);
router.get('/login', userController.loadLogin);

router.get('/:userId', userController.getUser);
router.get('/:userId/delete', userController.deleteUser);



module.exports = router;
