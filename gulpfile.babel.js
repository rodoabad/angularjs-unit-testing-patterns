(function () {

  'use strict';

  var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    paths = require('./config/paths.js');

  var tasks = [
    'build-app',
    'build-lib',
    'build-template',
    'default',
    'eslint',
    'github',
    'karma',
    'plato',
    'watch',
    'webpack'
  ];

  tasks.forEach(function (task) {
    require('./config/gulp/' + task + '.js')(gulp, plugins, paths);
  });

})();
