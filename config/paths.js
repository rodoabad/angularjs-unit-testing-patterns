module.exports = (function () {

  'use strict';

  return {
    app: 'src/client/**/!(*.spec).js',
    config: 'config/**/*.js',
    dist: 'example/js',
    html: 'src/client/packages/**/*.html',
    lib: [
      'node_modules/angular/angular.js',
      'node_modules/angular-ui-router/release/angular-ui-router.js'
    ],
    tests: 'src/client/**/*.spec.js'
  };

})();

