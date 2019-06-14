/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */

let auth = require('../services/auth');
module.exports = function (app) {
  app.use('/', require('./home'));
  app.use('/sample', auth.isAuthenticated, require('./sample'));
  app.use('/api/users', require('./users'));
};
