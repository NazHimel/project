/* eslint-disable object-curly-spacing */
/* eslint-disable spaced-comment */
/* eslint-disable space-before-blocks */
/* eslint-disable keyword-spacing */
/* eslint-disable brace-style */
let User = require('../models/user.model').User;
let TokenService = require('../services/TokenService');
module.exports.authorize = function (app, passport, LocalStrategy) {
  passport.use(new LocalStrategy(User.authenticate()));
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());
};

module.exports.isAuthenticated = function (req, res, next) {
  if (req.headers && req.headers.authorization){
    let token = req.headers.authorization;
    let data = TokenService.verifyToken(token);
    if(data){
      next();
    }
    else {
      //res.redirect('/users/login');
      res.status(403).send({message: 'Unauthorised'});
    }
  }
  else {
    res.redirect('/users/login');
  }
};
