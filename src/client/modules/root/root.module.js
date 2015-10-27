import angular from 'angular';
import uiRouter from 'angular-ui-router';

import config from './root.config.js';
import mainContainer from '../../components/main-container/main-container.directive.js';

export default angular.module('app.root', [uiRouter])
  .config(['$stateProvider', config])
  .directive('mainContainer', mainContainer)
  .name;