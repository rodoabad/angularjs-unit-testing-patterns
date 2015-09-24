module.exports = function (gulp, plugins, paths) {

  'use strict';

  gulp.task('watch', ['build-packages'], function () {
    gulp.watch(paths.packages, ['build-packages']);
  });

};
