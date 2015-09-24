(() => {

  'use strict';

  const angular = window.angular;

  function root($stateProvider) {

    let root = {
      name: 'root',
      url: '/',
      views: {
        'mainContainer@': {
          template: '<main-container></main-container>'
        }
      }
    };

    $stateProvider.state(root);

  }

  angular
    .module('app')
    .config([
      '$stateProvider',
      root
    ]);

})();
