module.exports = function (gulp, plugins, paths) {

  'use strict';

  gulp.task('build-lib', ['eslint'], function () {
    return gulp.src(
      [
        'node_modules/angular/angular.js',
        'node_modules/angular-ui-router/release/angular-ui-router.js'
      ]
    )
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.concat('libs.min.js'))
      .pipe(plugins.uglify())
      .pipe(plugins.sourcemaps.write('.'))
      .pipe(gulp.dest(paths.dist));
  });

};

