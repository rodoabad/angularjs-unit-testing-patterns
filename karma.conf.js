module.exports = function (config) {

  config.set({
    basePath: '',
    frameworks: [
      'chai',
      'mocha',
      'sinon'
    ],
    files: [
      'test/**/*.js'

    ],
    preprocessors: {
      'test/*.js': [
        'webpack',
        'sourcemap'
      ]
    },
    webpack: {
      devtool: 'inline',
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
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
      'mocha',
      'coverage',
      'coveralls'
    ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
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
    },
    babelPreprocessor: {
      filename: function (file) {
        return file.originalPath.replace(/\.js$/, '.es5.js');
      },
      sourceFileName: function (file) {
        return file.originalPath;
      }
    }
  });

};

