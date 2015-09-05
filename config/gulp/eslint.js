(function () {

  'use strict';

  var gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    eslintReporter = require('eslint-html-reporter'),
    fs = require('fs'),
    path = require('path');

  var paths = require('../paths.js');

  gulp.task('eslint', function () {
    return gulp.src([
      paths.js,
      paths.packages,
      paths.tests
    ]).pipe(eslint('.eslintrc'))
      .pipe(eslint.format(eslintReporter, function (results) {
        if (!fs.existsSync(paths.reports)) {
          fs.mkdirSync(paths.reports);
        }
        fs.writeFileSync(path.join(paths.reports, 'eslint.html'), results);
      }))
      .pipe(eslint.failAfterError());
  });

})();
