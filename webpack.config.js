var path = require('path')
var webpack = require('webpack')
var CopyWebpackPlugin = require('copy-webpack-plugin');

var uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
  minimize: true,
  compress: {
    warnings: false,
  }
});

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    index: ['webpack-hot-middleware/client', './src/index.js']
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js',
    publicPath: '/statics/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([ 
      { from: './style/', to: './statics/', ignore: '**.less' },
      { from: './src/vendor/', to: './statics/vendor', ignore: '**.less' },
    ]),
  ],
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['eslint-loader'],
      'plugins': [
        'esLint-plugin-react'
      ]
    }],
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'react-hot', 'babel?' + JSON.stringify({presets: ['react', 'es2015', 'stage-0']})],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.json$/,
        loaders: [ 'json'],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.css?$/,
        loaders: ["style", "css"],
        include: path.resolve(__dirname, "style")
      },
      {
        test: /\.css?$/,
        loaders: ["style", "css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]"],
        include: path.resolve(__dirname, "src"),
      },
      {
        test: /\.less$/,
        loaders: ["style", "css", "less"],
        include: path.resolve(__dirname, "style")
      },
      {
        test: /\.less$/,
        loaders: ["style", "css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]", "less"],
        include: path.resolve(__dirname, "src"),
      },
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=81920'}
    ]
  }
}
