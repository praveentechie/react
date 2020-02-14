var path = require('path');
var webpack = require('webpack');

var jsDestPath = '../build';

var webpackOptions = {
  devtool: 'eval-source-map',
  cache : true,
  watch: false,
  context: path.join(__dirname, 'client'),
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    '../../client/client.js'
  ],
  output: {
    filename: 'client.js',
    chunkFilename: '[id].[chunkhash].js',
    path: __dirname,
    publicPath: 'http://localhost:3008/'
  },
  module: {
    loaders: [
      { test: /.(?:jsx|js)$/,
        loaders: ['react-hot', 'babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: 'style!css!sass'},
      { test: /\.png/, loader: 'url' },
      { test: /\.jpg/, loader: 'url' },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json','.jsx','.css']
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ],
};

module.exports = webpackOptions;
