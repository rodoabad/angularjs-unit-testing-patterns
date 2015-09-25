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
          (UserInfoSvc) => {
            return UserInfoSvc.getPets().then(response => {
              return response.data;
            });
          }
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
