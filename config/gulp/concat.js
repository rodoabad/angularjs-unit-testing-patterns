(function () {

  'use strict';

  var gulp = require('gulp'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify');

  var paths = require('../paths.js');

  gulp.task('concat', ['eslint'], function () {
    return gulp.src([
      paths.packages
    ])
      .pipe(sourcemaps.init())
      .pipe(babel([]))
      .pipe(concat('packages.min.js'))
      .pipe(uglify())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(paths.dist));
  });

})();
