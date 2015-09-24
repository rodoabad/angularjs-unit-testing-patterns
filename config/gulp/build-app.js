module.exports = function (gulp, plugins, paths) {

  'use strict';

  gulp.task('build-app', ['eslint'], function () {
    return gulp.src([
      paths.app
    ])
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.babel([]))
      .pipe(plugins.concat('app.min.js'))
      .pipe(plugins.uglify())
      .pipe(plugins.sourcemaps.write('.'))
      .pipe(gulp.dest(paths.dist));
  });

};

