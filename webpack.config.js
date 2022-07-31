const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle[hash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        // Este sinal de interrogação é para o babel loader levar em consideração os arquivos com extensão jsx e js 
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      //Loader para lidar com arquivos css
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      //Loader para lidar com arquivos scss
      //Quando é utilizado o sass
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            }
          },
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    port: 3000,
  }
};