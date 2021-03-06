import webpack from 'webpack';
import path from 'path';

export default {

  devtool: 'inline-source-map',
  entry: './src/client/index.js',
  output: {
    path: path.join(__dirname, 'example'),
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'ng-annotate?single_quotes',
          'babel?cacheDirectory'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html'
      }
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ]

};
