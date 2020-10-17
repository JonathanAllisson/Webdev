const express = require('express');
const multer = require('multer');

const routes = express.Router();
const multerConfig = require('./config/multer');

const upload = multer(multerConfig);

const userController = require('./controllers/userController');
const postController = require('./controllers/postController');
const sessionController = require('./controllers/sessionController');
const commentController = require('./controllers/commentController');

const auth = require('./middlewares/auth');

routes.post('/', userController.create);
routes.get('/', userController.index);
routes.post('/post', auth, upload.single('file'), postController.create);
routes.get('/post', postController.index);
routes.get('/post/:id', postController.get);
routes.delete('/post/:id', auth, postController.delete);
routes.post('/login', sessionController.login);
routes.get('/comment/:post_id', commentController.index);
routes.delete('/comment/:id', auth, commentController.delete);
routes.post('/comment', auth, commentController.create);

module.exports = routes;
