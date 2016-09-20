const webpack = require('webpack');
const path = require('path');

const babelLoader = ['babel?presets[]=react,presets[]=es2015,presets[]=stage-2'];
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: './public',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js'],
    root: [
      path.resolve('./src/client'), //MUST BE ABSOLUTE
    ],
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loaders: isProd ? babelLoader : ['react-hot-loader/webpack', ...babelLoader],
      },
    ],
  },
  plugins: isProd ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ] : [],
};
