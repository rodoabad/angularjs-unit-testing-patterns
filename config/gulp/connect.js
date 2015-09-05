(function () {

  'use strict';

  var gulp = require('gulp'),
    connect = require('gulp-connect');

  var ROOT_PATH = 'example';

  gulp.task('connect', function () {
    connect.server({
      root: ROOT_PATH,
      livereload: true
    });
  });

})();
