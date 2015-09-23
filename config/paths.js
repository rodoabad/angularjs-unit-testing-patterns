module.exports = (function () {

  'use strict';

  var _ = require('lodash'),
    path = require('path');

  var ROOT_PATH = path.join(__dirname, '..');

  var DEFAULTS = {
    dist: 'example/client',
    js: 'config/**/*.js',
    packages: 'example/client/packages/**/!(*.spec).js',
    tests: 'example/client/packages/**/*.spec.js'
  };

  return _.mapValues(DEFAULTS, function (value) {
    return path.join(ROOT_PATH, value);
  });

})();

