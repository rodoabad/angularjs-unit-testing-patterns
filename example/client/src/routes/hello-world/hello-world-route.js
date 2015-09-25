(() => {

  'use strict';

  const angular = window.angular;

  function helloWorld($stateProvider) {

    let helloWorld = {
      name: 'root.helloWorld',
      url: 'hello-world',
      views: {
        'mainContent@root': {
          template: '<h1>Hello world!</h1>'
        }
      }
    };

    $stateProvider.state(helloWorld);

  }

  angular
    .module('app')
    .config([
      '$stateProvider',
      helloWorld
    ]);

})();
