import angular from 'angular';

import config from './config';

export default angular
  .module('app.helloWorld', [])
  .config(config)
  .name;
