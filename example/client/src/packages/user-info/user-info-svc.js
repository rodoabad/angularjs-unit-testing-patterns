(() => {

  'use strict';

  const angular = window.angular;

  class UserInfoSvc {

    constructor($http) {
      this.$http = $http;
    }

    getPets() {
      return this.$http.get('/api/pets').success(response => {
        return response;
      });
    }

  }

  angular
    .module('app')
    .service('UserInfoSvc', [
      '$http',
      UserInfoSvc
    ]);

})();
