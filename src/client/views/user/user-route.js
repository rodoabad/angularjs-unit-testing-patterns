import angular from 'angular';

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
    }
  };

  $stateProvider.state(user);

}

export default angular
  .module('app')
  .config([
    '$stateProvider',
    user
  ])
  .name;
