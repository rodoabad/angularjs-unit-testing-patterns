(function () {

  'use strict';

  var angular = window.angular,

    appIdentifier = 'app';

  angular.module(appIdentifier, [
    'ui.router'
  ]);

  function initApp($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('root', {
        url: '/',
        template: '<main-container></main-container>'
      });
  }

  angular.module(appIdentifier)
    .config([
      '$stateProvider',
      '$urlRouterProvider',
      initApp
    ]);

})();
