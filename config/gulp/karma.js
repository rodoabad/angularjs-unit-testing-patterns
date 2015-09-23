module.exports = function (gulp) {

  'use strict';

  var karma = require('karma'),
    path = require('path');

  gulp.task('karma', function () {
    karma.server.start({
      configFile: path.resolve('./karma.conf.js')
    });
  });

};
