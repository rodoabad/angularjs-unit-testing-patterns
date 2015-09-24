(() => {

  'use strict';

  const angular = window.angular;

  function init($urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

  }

  angular
    .module('app', [
      'ui.router'
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

})();
