(() => {

  'use strict';

  const angular = window.angular;

  function routes($stateProvider) {

    let root = {
      name: 'root',
      url: '/',
      views: {
        'mainContainer@': {
          template: '<main-container></main-container>'
        }
      }
    };

    let helloWorld = {
      name: 'root.helloWorld',
      url: 'hello-world',
      views: {
        'mainContent@root': {
          template: '<h1>Hello world!</h1>'
        }
      }
    };

    let userInfo = {
      name: 'root.userInfo',
      url: 'user-info',
      views: {
        'mainContent@root': {
          template: '<user-info></user-info>'
        }
      }
    };

    $stateProvider
      .state(root)
      .state(helloWorld)
      .state(userInfo);

  }

  angular
    .module('app')
    .config([
      '$stateProvider',
      routes
    ]);

})();
