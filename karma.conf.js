module.exports = function (config) {

  config.set({
    basePath: '',
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
        'sourcemap',
        'webpack'
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
    exclude: [],
    reporters: [
      'dots',
      //'coverage',
      //'coveralls'
    ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_ERROR,
    autoWatch: false,
    browsers: [
      'PhantomJS'
    ],
    singleRun: true,
    coverageReporter: {
      reporters: [
        {
          type: 'lcov',
          dir: 'reports/coverage',
          subdir: '.'
        }
      ]
    }
  });

};

