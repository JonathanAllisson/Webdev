const express = require('express');
const multer = require('multer');

const routes = express.Router();
const multerConfig = require('./config/multer');

const upload = multer(multerConfig);

const userController = require('./controllers/userController');
const postController = require('./controllers/postController');

routes.post('/', userController.create);
routes.get('/', userController.index);
routes.post('/post', upload.single('file'), postController.create);
routes.get('/post', postController.index);
routes.get('/post/:id', postController.get);

module.exports = routes;
