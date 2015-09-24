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
      'bower_components/angular/angular.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'example/client/packages/**/*.js',
      'example/client/**/*.spec.js',
      'example/client/**/*.html'
    ],
    preprocessors: {
      '**/example/client/packages/**/!(*.spec).js': 'coverage',
      '**/example/client/packages/**/*.js': 'babel',
      '**/example/client/**/*.html': 'ng-html2js'
    },
    exclude: [],
    reporters: ['mocha', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    coverageReporter: {
      reporters: [
        {
          type: 'text-summary'
        },
        {
          type: 'html',
          dir: 'reports/coverage'
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

