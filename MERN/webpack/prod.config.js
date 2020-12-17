var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

var jsDestPath = 'dist';
const RESOLVED_DIST_PATH = path.join(__dirname, '../', jsDestPath);

var webpackOptions = {
  mode: 'production',
  watch: false,
  entry: [
    './client/client.js'
  ],
  output: {
    path: RESOLVED_DIST_PATH,
    filename: 'client.js',
    chunkFilename: './scripts/[id].[chunkhash].js'
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
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new HtmlWebpackPlugin({
      title: 'React app',
      filename: 'index.html', // default value
      template: 'index.html',
      inject: true,
      excludeChunks: [ 'server' ]
    }),
    new CompressionPlugin()
  ],
};

module.exports = webpackOptions;
