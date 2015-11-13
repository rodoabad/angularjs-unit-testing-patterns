module.exports = {

  entry: './src/client/app.js',
  output: {
    path: './example',
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'ng-annotate',
          'babel-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html'
      }
    ]
  }

};
