import angular from 'angular';
import uiRouter from 'angular-ui-router';

import config from './app.config.js';

import appHelloWorld from './modules/hello-world/hello-world.module.js';
import appPetList from './modules/pet-list/pet-list.module.js';
import appRoot from './modules/root/root.module.js';

angular
  .module('app', [
    uiRouter,
    appHelloWorld,
    appPetList,
    appRoot
  ])
  .config([
    '$urlRouterProvider',
    config
  ]);

angular.element(document).ready(() => {

  angular.bootstrap(document, ['app'], {
    strictDi: true
  });

});
