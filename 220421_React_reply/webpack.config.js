const path = require('path');
const webpack = require('webpack');
const webpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MIniCssExtractPlugin = require('mini-css-extract-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  name: 'react-project',
  mode: 'development',

  resolve: {
    extensions: ['.jsx', '.js'],
  },
  //  내가 앞으로 번들할 파일들.
  entry: {
    app: ['./src/index'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: ['last 2 chrome versions', '> 5% in KR'],
                },
                debug: true,
              },
            ],
            '@babel/preset-react',
          ],
          plugins: ['react-refresh/babel'],
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },

  plugins: [
    new webpackPlugin(),
    new MiniCssExtractPlugin({ filename: 'style.css' }),
  ],

  //  내보낼 파일의 위치와 파일명.
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist',
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3030,
    hot: true,
    historyApiFallback: true,
  },
};
