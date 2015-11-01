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
      'src/client/**/*.js',
      'src/client/**/*.html'
    ],
    preprocessors: {
      'src/client/**/!(*.spec).js': 'coverage',
      'src/client/**/*.js': 'babel',
      'src/client/**/*.html': 'ng-html2js'
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
          type: 'lcov',
          dir: 'reports/coverage',
          subdir: '.'
        }
      ]
    },
    ngHtml2JsPreprocessor: {
      moduleName: 'karma.templates'
    },
    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
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

