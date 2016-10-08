const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const postApi = require('./apis/postApi');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.resolve('./public')));

// APIs
app.use('/api/posts', postApi);

module.exports = app;
