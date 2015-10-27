import angular from 'angular';
import uiRouter from 'angular-ui-router';

import config from './pet-list.config.js';

export default angular
  .module('app.petList', [uiRouter])
  .config([
    '$stateProvider',
    config
  ])
  .name;

