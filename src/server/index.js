const mongoose = require('mongoose');
import app from 'app.js';
import startServer from 'startServer.js';

const PORT = process.env.PORT || 8080;
const MONGODB_URL =
  process.env.MONGOHQ_URL ||
  'mongodb://localhost:27017/express-react-practice-1';

const prodServer = startServer(MONGODB_URL, PORT, app);
