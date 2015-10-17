module.exports = function (gulp, plugins, paths) {

  'use strict';

  gulp.task('build-template', ['eslint'], function () {
    return gulp.src(paths.html)
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.angularTemplatecache({
        filename: 'template.min.js',
        module: 'app',
        moduleSystem: 'IIFE',
        root: 'src/client/packages/'
      }))
      .pipe(plugins.uglify())
      .pipe(plugins.sourcemaps.write('.'))
      .pipe(gulp.dest(paths.dist));
  });

};

