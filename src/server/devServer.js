const getApp = require('./getApp.js');
const startServer = require('./startServer');
const devConfig = require('../shared/serverConfig').dev;

// Enable CORS and stuff
function applyMiddlewares() {
  this.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
}

const app = getApp(applyMiddlewares);

const devServer = startServer(
  devConfig.MONGODB_URL,
  devConfig.PORT,
  app
);
