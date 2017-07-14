// const webpack = require('webpack');
const path = require('path');
// const WebpackNotifierPlugin = require('webpack-notifier');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app/index.module.js',
  externals: {
    angular: 'angular',
    moment: 'moment'
  },
  //   resolve: {
  //     extensions: ['.js', '.html'],
  //     alias: {
  //       locales: path.resolve(__dirname, 'config', 'locales')
  //     }
  //   },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  // devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /^(?!.*\.spec\.js$).*\.js$/,
        exclude: /(node_modules|bower_components)/,
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
        // use: [
        //   { loader: 'style-loader' },
        //   { loader: 'css-loader' },
        //   { loader: 'sass-loader' }
        // ]
      }
    ]
  },
  plugins: [new ExtractTextPlugin('styles.css')]
  //   plugins: [
  //     // new webpack.optimize.CommonsChunkPlugin({
  //     //   name: 'components',
  //     //   chunks: ['appointments', 'my_day', 'patients', 'contacts', 'features', 'documents', 'settings', 'financials']
  //     // }),
  //     // new WebpackNotifierPlugin(),
  //     // new webpack.optimize.ModuleConcatenationPlugin(),
  //     // new BundleAnalyzerPlugin()
  //   ]
};
