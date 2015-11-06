import angular from 'angular';
import uiRouter from 'angular-ui-router';

import config from './config.js';
import mainContainer from '../../components/main-container/main-container.directive.js';

export default angular
  .module('app.root', [
    uiRouter
  ])
  .config(config)
  .directive('mainContainer', mainContainer)
  .name;
