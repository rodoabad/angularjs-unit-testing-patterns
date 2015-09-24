module.exports = function (gulp, plugins, paths) {

  'use strict';

  gulp.task('build-lib', ['eslint'], function () {
    return gulp.src(
      [
        'bower_components/angular/angular.js',
        'bower_components/angular-ui-router/release/angular-ui-router.js'
      ]
    )
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.concat('libs.min.js'))
      .pipe(plugins.uglify())
      .pipe(plugins.sourcemaps.write('.'))
      .pipe(gulp.dest(paths.dist));
  });

};

