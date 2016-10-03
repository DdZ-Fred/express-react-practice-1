const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

import postRouter from 'apis/postApi';

const app = express();

// ###########
// MIDDLEWARES
// ###########

// Data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static assets
app.use(express.static(path.resolve('./public')));


app.use('/api/posts', postRouter);

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log(`Server is now listening on localhost:${PORT}`);
});
