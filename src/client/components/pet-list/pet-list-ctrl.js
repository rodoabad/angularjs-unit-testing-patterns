import angular from 'angular';

class PetListCtrl {

  constructor(data) {

    this.data = data;

  }

}

angular
  .module('app')
  .controller('PetListCtrl', [
    'data',
    PetListCtrl
  ]);
