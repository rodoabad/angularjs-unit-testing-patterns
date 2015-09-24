module.exports = function (gulp) {

  'use strict';

  gulp.task('default', [
    'build-lib',
    'build-packages',
    'watch'
  ]);

};
