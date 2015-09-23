module.exports = function (gulp, plugins, paths) {

  'use strict';

  gulp.task('concat', ['eslint'], function () {
    return gulp.src([
      paths.packages
    ])
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.babel([]))
      .pipe(plugins.concat('packages.min.js'))
      .pipe(plugins.uglify())
      .pipe(plugins.sourcemaps.write('.'))
      .pipe(gulp.dest(paths.dist));
  });

};

