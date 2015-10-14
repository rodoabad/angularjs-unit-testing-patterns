module.exports = function (gulp) {

  'use strict';

  var plato = require('plato');

  var callback = function () {

  };

  gulp.task('plato', ['build-app'], function () {
    plato.inspect([
      'output/**/*.js'
    ], 'reports/plato', {}, callback);
  });

};
