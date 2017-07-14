const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: './src/app/index.module.js',
  externals: {
    angular: 'angular',
    moment: 'moment'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ob-daterangepicker.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /^(?!.*\.spec\.js$).*\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }]
      },
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }]
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('ob-daterangepicker.css')
    // new BundleAnalyzerPlugin()
  ]
};
