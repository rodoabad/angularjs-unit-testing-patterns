module.exports = function (gulp, plugins, paths) {

  'use strict';

  gulp.task('watch', ['concat'], function () {
    gulp.watch(paths.packages, ['concat']);
  });

};
