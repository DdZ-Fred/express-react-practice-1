const path = require('path');

module.exports.config = {
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

module.exports.babelLoader = 'babel?presets[]=es2015,presets[]=react,presets[]=stage-2';
