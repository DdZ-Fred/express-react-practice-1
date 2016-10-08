const app = require('./app.js');
const startServer = require('./startServer');
const devConfig = require('../shared/serverConfig').dev;

// DONE:10 imports CONSTANTS from shared folder
// DONE:40 Use Nodemon for DEV API Server (Update scripts)
const devServer = startServer(
  devConfig.MONGODB_URL,
  devConfig.PORT,
  app
);
