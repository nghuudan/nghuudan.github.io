const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const sass = require('sass');
const config = require('./webpack.config');

module.exports = {
  ...config,
  devtool: false,
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: sass,
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.join(__dirname, 'docs'),
    publicPath: '/',
  },
  plugins: [
    ...config.plugins,
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  target: ['es5', 'web'],
};
