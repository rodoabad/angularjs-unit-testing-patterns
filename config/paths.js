(function () {

  'use strict';

  var _ = require('lodash'),
    path = require('path');

  module.exports = (function () {

    var ROOT_PATH = path.join(__dirname, '..');

    var DEFAULTS = {
      dist: 'example',
      karma: 'config/karma/karma.conf.js',
      js: 'config/**/*.js',
      html: 'example/**/*.html',
      packages: 'example/packages/**/!(*.spec).js',
      reports: 'reports',
      tests: 'example/packages/**/*.spec.js'
    };

    return _.mapValues(DEFAULTS, function (value) {
      return path.join(ROOT_PATH, value);
    });

  })();

})();
