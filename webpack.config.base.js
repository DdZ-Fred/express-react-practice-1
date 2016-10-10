const path = require('path');

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: './public',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.json'],
    alias: {
      shared: path.resolve(__dirname, 'src/shared'),
      actions: path.resolve(__dirname, 'src/client/actions'),
      components: path.resolve(__dirname, 'src/client/components'),
      containers: path.resolve(__dirname, 'src/client/containers'),
      reducers: path.resolve(__dirname, 'src/client/reducers'),
      routes: path.resolve(__dirname, 'src/client/routes'),
      shapes: path.resolve(__dirname, 'src/client/shapes'),
      utils: path.resolve(__dirname, 'src/client/utils'),
    },
  },
};
