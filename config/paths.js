module.exports = (function () {

  'use strict';

  return {
    app: 'example/client/src/**/!(*.spec).js',
    config: 'config/**/*.js',
    dist: 'example/client',
    lib: [
      'node_modules/angular/angular.js',
      'node_modules/angular-ui-router/release/angular-ui-router.js'
    ],
    tests: 'example/client/src/**/*.spec.js'
  };

})();

