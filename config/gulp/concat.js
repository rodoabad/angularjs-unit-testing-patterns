(function () {

  'use strict';

  var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

  var paths = require('../paths.js');

  gulp.task('concat', ['eslint'], function () {
    return gulp.src([
      paths.packages
    ])
      .pipe(concat('packages.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest(paths.dist));
  });

})();
