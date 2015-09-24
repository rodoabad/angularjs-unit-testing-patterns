(() => {

  'use strict';

  const angular = window.angular;

  function userInfo($stateProvider) {

    let userInfo = {
      name: 'root.userInfo',
      url: 'user-info',
      views: {
        'mainContent@root': {
          template: '<user-info></user-info>'
        }
      }
    };

    $stateProvider.state(userInfo);

  }

  angular
    .module('app')
    .config([
      '$stateProvider',
      userInfo
    ]);

})();
