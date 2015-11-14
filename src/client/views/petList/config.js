/* @ngInject */
export default $stateProvider => {

  const state = {
    name: 'root.petList',
    url: 'pet-list',
    views: {
      'mainContent@root': {
        template: '<pet-list></pet-list>',
        controller: 'PetListCtrl',
        controllerAs: 'vm'
      }
    },
    resolve: {
      /* @ngInject */
      data: PetListSvc => PetListSvc.getPets()
        .then(data => data)
    }
  };

  $stateProvider.state(state);

};
