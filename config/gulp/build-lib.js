module.exports = function (gulp, plugins, paths) {

  'use strict';

  gulp.task('build-lib', ['eslint'], function () {
    return gulp.src(paths.lib)
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.concat('lib.min.js'))
      .pipe(plugins.uglify())
      .pipe(plugins.sourcemaps.write('.'))
      .pipe(gulp.dest(paths.dist));
  });

};

