module.exports = function (config) {

  config.set({
    browsers: [
      'PhantomJS'
    ],
    frameworks: [
      'chai',
      'mocha',
      'sinon'
    ],
    files: [
      'webpack.karma.js'
    ],
    preprocessors: {
      'webpack.karma.js': [
        'webpack',
        'sourcemap'
      ]
    },
    webpack: {
      devtool: 'inline-source-map',
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
      }
    },
    reporters: [
      'mocha'
    ]
  });

};

