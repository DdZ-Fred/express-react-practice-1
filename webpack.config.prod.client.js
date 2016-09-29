const webpack = require('webpack');
const base = require('./webpack.config.base.js');

module.exports = Object.assign(base.config, {
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loaders: [base.babelLoader],
      },
    ],
  },
  devtool: 'cheap-module-source-map',
  plugins: [
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
        screw_ie8: true, //  Remove IE 6-8 Support
        drop_console: true, //  Discard console.* calls
      },
      comments: false,
    }),
  ],
});
