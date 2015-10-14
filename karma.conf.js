module.exports = function (config) {

  'use strict';

  config.set({
    basePath: '',
    frameworks: [
      'chai',
      'mocha',
      'sinon'
    ],
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-ui-router/release/angular-ui-router.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'example/client/src/**/*.js',
      'example/client/**/*.html'
    ],
    preprocessors: {
      '**/example/client/src/**/!(*.spec).js': 'coverage',
      '**/example/client/src/**/*.js': 'babel',
      '**/example/client/**/*.html': 'ng-html2js'
    },
    exclude: [],
    reporters: [
      'mocha',
      'coverage',
      'coveralls'
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
          type: 'text'
        },
        {
          type: 'lcov',
          dir: 'reports/coverage',
          subdir: '.'
        }
      ]
    },
    ngHtml2JsPreprocessor: {
      stripPrefix: 'example/client/',
      moduleName: 'karma.templates'
    },
    babelPreprocessor: {
      options: {
        sourceMap: false
      },
      filename: function (file) {
        return file.originalPath.replace(/\.js$/, '.es5.js');
      },
      sourceFileName: function (file) {
        return file.originalPath;
      }
    }
  });

};

