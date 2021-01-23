const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    historyApiFallback: true,
  },
  devtool: 'eval-source-map',
  entry: path.join(__dirname, 'src', 'main'),
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'main.html'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
};
