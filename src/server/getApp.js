const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const postApi = require('./apis/postApi');

module.exports = function getApp(applyMiddlewares) {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(express.static(path.resolve('./public')));

  // Apply middlewares
  applyMiddlewares.call(app);

  // APIs
  app.use('/api/posts', postApi);

  return app;
};
