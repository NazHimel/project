/* eslint-disable spaced-comment */
/* eslint-disable object-curly-spacing */
let jwt = require('jsonwebtoken');
//let Promise = require('bluebird');
let key = 'nodeKey';

/**
 * Generates token
 * @param {Object} payload contains user model
 * @param {Number} days
 */
let generateToken = function (payload, days = 1) {
  let token = jwt.sign(payload, key, {expiresIn: 60 * 60 * 24 * days});
  return token;
};

/**
 * checks whether the token is valid/expired
 * @param {jsonwebtoken} token
 */
let verifyToken = function (token) {
  try {
    let data = jwt.verify(token, key);
    return data;
  } catch (err) {
    console.log(err);
  }
};

module.exports.verifyToken = verifyToken;
module.exports.generateToken = generateToken;
