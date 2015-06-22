"use strict";
var express = require('express');

var router = express.Router();

module.exports = function(app) {
  var user = require('../controllers/user.controller');

  router.route('/authenticate')
    .post(user.auth);

  router.route('/users')
    .get(user.getUsers)
    .post(user.createUser)
    .delete(user.deleteAll);

  router.route('/user/:id')
    .get(user.findUser)
    .put(user.updateUser)
    .delete(user.deleteUser);

  router.route("/me/:id")
    .get(user.getMe);

  app.use('/api', router);
};
