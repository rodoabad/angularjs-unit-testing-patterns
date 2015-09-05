(function () {

  'use strict';

  var angular = window.angular;

  function UserInfoCtrl() {

    var vm = this;

    vm.hello = 'Hello there.';
  }

  angular.module('app')
    .controller('UserInfoCtrl', [
      UserInfoCtrl
    ]);

})();
