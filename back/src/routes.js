const express = require('express');

const routes = express.Router();

const userController = require('./controllers/userController');

routes.post('/', userController.create);
routes.get('/', userController.index);

module.exports = routes;
