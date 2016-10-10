const app = require('./app.js');
const startServer = require('./startServer');
const prodConfig = require('../shared/serverConfig').prod;

const PORT = process.env.PORT || prodConfig.PORT;
const MONGODB_URL =
  process.env.MONGOHQ_URL ||
  prodConfig.MONGODB_URL;

const prodServer = startServer(
  MONGODB_URL,
  PORT,
  app
);
