const app = require('./app.js');
const startServer = require('./startServer');
const devConfig = require('../shared/serverConfig').dev;

const devServer = startServer(
  devConfig.MONGODB_URL,
  devConfig.PORT,
  app
);
