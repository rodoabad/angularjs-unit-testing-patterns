(() => {

  'use strict';

  const angular = window.angular;

  function mainContainer() {

    return {
      restrict: 'E',
      templateUrl: 'src/client/packages/main-container/main-container.html'
    };

  }

  angular
    .module('app')
    .directive('mainContainer', [
      mainContainer
    ]);

})();
