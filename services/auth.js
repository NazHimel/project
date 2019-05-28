let User = require('../models/user.model').User;
module.exports.authorize = function (app, passport, LocalStrategy) {
  passport.use(new LocalStrategy(User.authenticate()));
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());
};

module.exports.isAuthenticated = function (req, res, next) {
  if (res.cookie('loggedIn')) {
    next();
  } else {
    res.redirect('/users/login');
  }
};
