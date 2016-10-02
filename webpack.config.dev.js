const base = require('./webpack.config.base.js');

module.exports = Object.assign({}, base.config, {
  devServer: {
    contentBase: 'public/',
    historyApiFallback: true,
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loaders: [
          'react-hot-loader/webpack',
          'babel?presets[]=es2015,presets[]=react,presets[]=stage-2',
        ],
      },
    ],
  },
});
