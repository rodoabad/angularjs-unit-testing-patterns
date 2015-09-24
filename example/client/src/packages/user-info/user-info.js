(() => {

  'use strict';

  const angular = window.angular;

  function userInfo() {

    return {
      restrict: 'E',
      templateUrl: 'src/packages/user-info/user-info.html',
      controller: 'UserInfoCtrl',
      controllerAs: 'vm',
      bindToController: true
    };

  }

  angular.module('app')
    .directive('userInfo', [
      userInfo
    ]);

})();
