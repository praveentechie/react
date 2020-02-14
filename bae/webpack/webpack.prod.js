const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './server/server.js',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'server.js',
    publicPath: '/'
  },
  target: 'node',
  externals: '../node_modules',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `'production'`
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
};