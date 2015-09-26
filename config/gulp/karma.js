module.exports = function (gulp) {

  'use strict';

  var karma = require('karma').Server,
    path = require('path');

  var server = new karma({
    configFile: path.resolve('./karma.conf.js')
  });

  gulp.task('karma', ['eslint'], function () {
    server.start();
  });

};
