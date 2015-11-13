import gulp from 'gulp';
import webpack from 'webpack';

import config from '../../webpack.config.js';

gulp.task('webpack', function (callback) {

  webpack(config, function (error, stats) {
    callback();
  });

});

