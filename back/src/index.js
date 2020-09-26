require('dotenv').config();
const cors = require('cors');
const express = require('express');
const path = require('path');

const routes = require('./routes');

const app = express();
app.use(cors({}));
app.use(express.json());
app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
);
app.use(routes);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Running in Port ${PORT}`);
});
