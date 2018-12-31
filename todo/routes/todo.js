var express = require('express');
var router = express.Router();
var db = require("../models");
var helpers = require("../helpers/todo")

// Refactored Index Route and Create Route

router.route('/')
    .get(helpers.getTodos)
    .post(helpers.createTodo)

// Refactored Show Route, Update Route, Delete Route

router.route('/:todoId')
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo);

module.exports = router;