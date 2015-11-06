import angular from 'angular';

import config from './config.js';

export default angular
  .module('app.helloWorld', [])
  .config(config)
  .name;
