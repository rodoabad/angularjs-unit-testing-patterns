import angular from 'angular';
import uiRouter from 'angular-ui-router';

import config from './config.js';

import appHelloWorld from './views/helloWorld/index.js';
import appPetList from './views/petList/index.js';
import appRoot from './views/root/index.js';
import appUser from './views/user/index.js';

angular
  .module('app', [
    uiRouter,
    appHelloWorld,
    appPetList,
    appRoot,
    appUser
  ])
  .config(config);

angular
  .element(document)
  .ready(() => {

    angular.bootstrap(document, ['app'], {
      strictDi: true
    });

  });
