const path = require('path');

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: './public',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.json'],
    root: [
      path.resolve('./src/client'), //MUST BE ABSOLUTE
    ],
  },
};
