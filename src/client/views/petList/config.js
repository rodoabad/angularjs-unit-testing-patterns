export default [
  '$stateProvider',
  $stateProvider => {

    const state = {
      name: 'root.petList',
      url: 'pet-list',
      views: {
        'mainContent@root': {
          template: '<petList></petList>',
          controller: 'PetListCtrl',
          controllerAs: 'vm'
        }
      },
      resolve: {
        data: [
          'PetListSvc',
          (PetListSvc) => PetListSvc.getPets()
            .then(data => data)
        ]
      }
    };

    $stateProvider.state(state);

  }
];
