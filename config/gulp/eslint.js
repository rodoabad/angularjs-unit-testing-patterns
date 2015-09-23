module.exports = function (gulp, plugins, paths) {

  'use strict';

  var friendlyFormatter = require('eslint-friendly-formatter');

  gulp.task('eslint', function () {
    return gulp.src([
      paths.js,
      paths.packages,
      paths.tests
    ]).pipe(plugins.eslint('.eslintrc'))
      .pipe(plugins.eslint.format(friendlyFormatter))
      .pipe(plugins.eslint.failAfterError());
  });

};

