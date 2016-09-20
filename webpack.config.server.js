const path = require('path');
const fs = require('fs');

module.exports = {
  entry: './src/server/index.js',
  target: 'node',
  externals: fs.readdirSync('node_modules')
  .reduce((acc, mod) => {
    if (mod === '.bin') {
      return acc;
    }

    acc[mod] = 'commonjs ' + mod;
    return acc;
  }, {}),
  output: {
    path: './',
    filename: 'server.bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.json'],
    root: [path.resolve('./src/server')],
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: [
            'es2015',
            'stage-2',
          ],
        },
      },
    ],
  },
};
