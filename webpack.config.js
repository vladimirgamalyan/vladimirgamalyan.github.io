const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    about: './src/about.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // очищает dist перед каждой сборкой
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'], // обрабатывает CSS
      },
      {
        test: /\.html$/i,
        loader: 'html-loader', // позволяет обрабатывать HTML-файлы (например, вставка картинок)
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['index'], // подключает только index.js и index.css
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: './src/about.html',
      chunks: ['about'], // подключает только about.js и about.css
    }),
  ],
  mode: 'development', // или 'production'
  devServer: {
    static: './dist',
    port: 3003
  }
};
