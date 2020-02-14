var path = require('path');
var webpack = require('webpack');

var jsDestPath = '../build';

var webpackOptions = {
  watch: false,
  entry: [
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
		inline: true
	},
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.UglifyJsPlugin([{
    //   compress: {
    //     warning: false
    //   }
    // }]),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
};

module.exports = webpackOptions;
