(() => {

  'use strict';

  const angular = window.angular;

  class UserInfoSvc {

    constructor($http) {
      this.$http = $http;
    }

    getPets() {
      return this.$http.get('/api/pets').then(response => response.data);
    }

  }

  angular
    .module('app')
    .service('UserInfoSvc', [
      '$http',
      UserInfoSvc
    ]);

})();
