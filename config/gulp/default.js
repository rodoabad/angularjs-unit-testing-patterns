module.exports = function (gulp) {

  'use strict';

  gulp.task('default', [
    'build-app',
    'build-lib',
    'watch'
  ]);

};
