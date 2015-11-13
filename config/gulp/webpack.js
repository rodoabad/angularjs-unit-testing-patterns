var webpackConfig = require('../../webpack.config.js');
var webpack = require('webpack');

module.exports = function (gulp, plugins, paths) {

  'use strict';

  gulp.task('webpack', function (callback) {

    webpack(webpackConfig, function (error, stats) {
      callback();
    });

  });

};
