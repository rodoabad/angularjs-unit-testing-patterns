module.exports = function (config) {

  config.set({
    basePath: '',
    frameworks: [
      'chai',
      'mocha',
      'sinon'
    ],
    files: [
      'example/app.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'test/*.js'

    ],
    preprocessors: {
      'example/app.js': [
        'webpack',
        'sourcemap'
      ],
      'test/*.js': ['babel']
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

