var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var jsDestPath = '../dist';
console.log(path.join(__dirname, '..', 'dist'));
var webpackOptions = {
  mode: 'development',
  devtool: 'eval-source-map',
  cache : true,
  watch: false,
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './client/client.js'
  ],
  output: {
    filename: 'client.js',
    chunkFilename: '[id].[chunkhash].js',
    path: path.join(__dirname, '..', 'dist')
  },
  module: {
    rules: [
      {
        test: /.(?:jsx|js)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /.jsx$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
      { test: /\.png/, use: ['url-loader'] },
      { test: /\.jpg/, use: ['url-loader'] },
    ]
  },
  resolve: {
    extensions: ['.js', '.json','.jsx','.css']
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React app',
      filename: 'index.html', // default value
      template: 'index.html',
      inject: true,
      excludeChunks: [ 'server' ]
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
};

module.exports = webpackOptions;
