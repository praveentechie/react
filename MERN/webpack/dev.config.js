var path = require('path');
var webpack = require('webpack');

var jsDestPath = '../build';

var webpackOptions = {
  devtool: 'eval-source-map',
  cache : true,
  watch: false,
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './client/client.js'
  ],
  output: {
    path: __dirname + '/'+jsDestPath,
    filename: 'client.js',
    chunkFilename: '[id].[chunkhash].js',
    publicPath :  'http://localhost:3000/'
  },
  module: {
    loaders: [
      { test: /.(?:jsx|js)$/,
        loader: 'babel-loader',
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
  devServer: {
    contentBase: __dirname + '/client/',
		noInfo: true, //  --no-info option
		hot: true,
		inline: true
	},
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ],
  devServer: {
    host: 'localhost',
    port: 3000,

    historyApiFallback: true,
    // respond to 404s with index.html

    hot: true,
    // enable HMR on the server
  }
};

module.exports = webpackOptions;
