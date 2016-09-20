const path = require('path');

module.exports = {
  entry: './src/server/index.js',
  output: {
    path: './',
    filename: 'server.bundle.js',
  },
  resolve: {
    extensions: ['', '.js'],
    root: [path.resolve('./src/server/')],
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },
};
