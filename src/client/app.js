import angular from 'angular';
import uiRouter from 'angular-ui-router';

import {init} from './app.config.js';

import appRoot from './modules/root/root.module.js';

angular
  .module('app', [
    uiRouter,
    appRoot
  ])
  .config([
    '$urlRouterProvider',
    init
  ]);

angular.element(document).ready(() => {

  angular.bootstrap(document, ['app'], {
    strictDi: true
  });

});
