module.exports = function (gulp, plugins, paths) {

  'use strict';

  gulp.task('watch', ['build-app'], function () {
    gulp.watch(paths.app, ['build-app']);
  });

};
