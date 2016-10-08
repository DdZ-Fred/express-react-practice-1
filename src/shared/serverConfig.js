// DONE:0 Create shared serverConfig

module.exports.dev = {
  PORT: 3000,
  MONGODB_URL: 'mongodb://localhost:27017/express-react-practice-1',
};

module.exports.prod = {
  PORT: 8080,
  MONGODB_URL: 'mongodb://localhost:27017/express-react-practice-1',
};
