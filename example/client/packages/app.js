(() => {

  'use strict';

  const angular = window.angular;

  function initApp($stateProvider, $urlRouterProvider) {

    let root = {
      name: 'root',
      url: '/',
      template: '<main-container></main-container>'
    };

    let helloWorld = {
      name: 'helloWorld',
      url: '/hello',
      template: '<h1>Hello world!</h1>'
    };

    $stateProvider
      .state(root)
      .state(helloWorld);

    $urlRouterProvider.otherwise('/');
  }

  angular
    .module('app', [
      'ui.router'
    ])
    .config([
      '$stateProvider',
      '$urlRouterProvider',
      initApp
    ]);

})();
