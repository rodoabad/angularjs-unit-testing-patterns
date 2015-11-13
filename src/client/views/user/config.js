/*@ngInject*/
export default  $stateProvider => {

  const state = {
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

  $stateProvider.state(state);

};
