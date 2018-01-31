var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StyleLintPlugin = require('stylelint-webpack-plugin');
var nodeExternals = require('webpack-node-externals');
module.exports = {
  entry: './src/documentation/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
  },
  // target: 'node',
  // externals: [nodeExternals()],
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['react'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loawebpackder',
      },
      {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract(
          'css-loader!sass-loader?includePaths[]=',
          {publicPath: './', minimize: true}
        ),
      },
    ],
  },
  watchOptions: {
    poll: true,
  },
  plugins: [new ExtractTextPlugin('bundle.css'), new StyleLintPlugin()],
};
