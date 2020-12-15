var path = require('path');
var webpack = require('webpack');

var jsDestPath = '../dist';

var webpackOptions = {
  watch: false,
  entry: [
    './client/client.js'
  ],
  output: {
    path: __dirname + '/'+jsDestPath,
    filename: 'client.js',
    chunkFilename: '[id].[chunkhash].js',
    publicPath :  'http://localhost:3040/'
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
    modules: ['node_modules', 'client'],
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
