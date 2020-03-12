const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production', // development or production
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
    })
  ],

  module: {

  },

  resolve: {
    extensions: ['.js', '.jsx', 'json'],
    alias: {
      '@': path.join(__dirname, './src')
    }
  }
}