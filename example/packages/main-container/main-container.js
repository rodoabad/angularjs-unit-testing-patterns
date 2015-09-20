(() => {

  'use strict';

  const angular = window.angular;

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
