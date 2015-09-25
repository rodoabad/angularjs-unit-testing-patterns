(() => {

  'use strict';

  const angular = window.angular;

  function user($stateProvider) {

    let user = {
      name: 'root.user',
      url: 'user',
      views: {
        'mainContent@root': {
          template: '<user-info></user-info>',
          controller: 'UserInfoCtrl',
          controllerAs: 'vm'
        }
      },
      resolve: {
        data: [
          'UserInfoSvc',
          (UserInfoSvc) => UserInfoSvc.getPets().then(data => data)
        ]
      }
    };

    $stateProvider.state(user);

  }

  angular
    .module('app')
    .config([
      '$stateProvider',
      user
    ]);

})();
