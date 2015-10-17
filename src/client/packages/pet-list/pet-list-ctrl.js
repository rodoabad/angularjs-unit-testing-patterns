(() => {

  'use strict';

  const angular = window.angular;

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

})();
