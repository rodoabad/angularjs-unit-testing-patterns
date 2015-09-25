(() => {

  'use strict';

  const angular = window.angular;

  class UserInfoCtrl {

    constructor(data) {

      this.data = data;

    }

  }

  angular.module('app')
    .controller('UserInfoCtrl', [
      'data',
      UserInfoCtrl
    ]);

})();
