import gulp from 'gulp';
import webpack from 'webpack';

import config from '../../webpack.config.js';

gulp.task('webpack', ['eslint'], function (callback) {

  webpack(config, function () {
    callback();
  });

});

