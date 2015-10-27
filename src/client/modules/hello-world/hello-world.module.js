import angular from 'angular';
import uiRouter from 'angular-ui-router';

import config from './hello-world.config.js';

export default angular
  .module('app.helloWorld', [
    uiRouter
  ])
  .config([
    '$stateProvider',
    config
  ])
  .name;
