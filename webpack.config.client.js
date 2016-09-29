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
  devtool: 'cheap-module-source-map',
  plugins: isProd ? [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
      },
      comments: false,
    }),
  ] : [],
};
