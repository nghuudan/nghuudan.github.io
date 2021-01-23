const path = require('path');
const config = require('./webpack.config');

module.exports = {
  ...config,
  devtool: false,
  mode: 'production',
  output: {
    filename: '[name].[chunkhash].js',
    path: path.join(__dirname, 'docs'),
  },
};
