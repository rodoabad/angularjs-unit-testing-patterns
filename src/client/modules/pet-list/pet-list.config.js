export default function ($stateProvider) {

  const petList = {
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
      data: [
        'PetListSvc',
        (PetListSvc) => PetListSvc.getPets().then(data => data)
      ]
    }
  };

  $stateProvider.state(petList);

}