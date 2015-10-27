(() => {

  'use strict';

  const angular = window.angular;

  class PetListSvc {

    constructor($http) {
      this.$http = $http;
    }

    getPets() {
      return this.$http
        .get('/api/pets')
        .then(response => response.data)
        .catch(response => {

          const message = `Oops, something went wrong! We got ${response.status} from the server!`;

          throw new Error(message);

        });
    }

    something() {

      throw new Error('rawr');
    }

  }

  angular
    .module('app')
    .service('PetListSvc', [
      '$http',
      PetListSvc
    ]);

})();
