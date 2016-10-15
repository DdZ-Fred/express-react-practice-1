const webpack = require('webpack');
const baseConfig = require('./webpack.config.base.js');

module.exports = Object.assign({}, baseConfig, {
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: [
            'es2015',
            'react',
            'stage-2',
          ],
          plugins: [
            'transform-react-constant-elements',
            'transform-react-inline-elements',
            ['transform-react-remove-prop-types', { 'mode': 'wrap' }],
          ],
        },
      },
    ],
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
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
