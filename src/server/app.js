const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

import postApi from 'apis/postApi';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.resolve('./public')));

// APIs
app.use('/api/posts', postApi);

export default app;
