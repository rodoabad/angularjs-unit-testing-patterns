import angular from 'angular';
import uiRouter from 'angular-ui-router';

import config from './config';
import mainContainer from '../../components/main-container/main-container.directive';

export default angular
  .module('app.root', [
    uiRouter
  ])
  .config(config)
  .directive('mainContainer', mainContainer)
  .name;
