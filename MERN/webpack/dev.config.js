var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var jsDestPath = 'dist';

var webpackOptions = {
  mode: 'development',
  devtool: 'eval-source-map',
  cache : true,
  watch: false,
  entry: [
    'webpack-dev-server/client?http://localhost:3040',
    'webpack/hot/only-dev-server',
    './client/client.js'
  ],
  output: {
    path: path.join(__dirname, '../', jsDestPath),
    filename: 'client.js',
    chunkFilename: '[id].[chunkhash].js',
    publicPath: path.join(__dirname, '../', jsDestPath)
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
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }, {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'images/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    /**
     * ### webpack: directly import the sub-folders like a module
     */
    modules: ['node_modules', 'client'],
    extensions: ['.js', '.json','.jsx','.scss','.css']
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
    new HtmlWebpackPlugin({
      title: 'React app',
      filename: 'index.html', // default value
      template: 'index.html',
      inject: true,
      excludeChunks: [ 'server' ]
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    host: 'localhost',
    port: 3040,
    contentBase: path.join(__dirname, '..', 'dist'),
    historyApiFallback: true,
    // respond to 404s with index.html

    hot: true,
    // enable HMR on the server
  }
};

module.exports = webpackOptions;
