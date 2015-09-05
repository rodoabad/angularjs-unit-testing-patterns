(function () {

  'use strict';

  var angular = window.angular;

  function mainContainer() {

    return {
      restrict: 'E',
      templateUrl: 'packages/main-container/main-container.html'
    };

  }

  angular.module('app')
    .directive('mainContainer', [
      mainContainer
    ]);

})();
