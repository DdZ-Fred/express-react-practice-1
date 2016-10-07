const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');

const app = require('./app.js');
const startServer = require('./startServer.js');
const config = require('webpack.config.prof.server.js');

const PORT = 3000;
const MONGODB_URL = 'mongodb://localhost:27017/express-react-practice-1';
const compiler = webpack(config);
