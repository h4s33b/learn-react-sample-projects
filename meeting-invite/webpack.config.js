var webpack = require("webpack");

module.exports = {
  devtool: 'inline-source-map',
  entry: __dirname + '/app.js',
  output: {
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.js?/,
        loader : 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
}
