(function () {

  'use strict';

  var gulp = require('gulp'),
    requireDir = require('require-dir');

  var config = requireDir('config', {
    recurse: true
  });

  gulp.task('github', ['eslint', 'karma']);

  gulp.task('default', [
    'concat',
    'connect'
  ]);

})();