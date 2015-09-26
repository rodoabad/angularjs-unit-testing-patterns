(() => {

  'use strict';

  const angular = window.angular;

  function petList() {

    return {
      restrict: 'E',
      templateUrl: 'src/packages/pet-list/pet-list.html',
      bindToController: true
    };

  }

  angular
    .module('app')
    .directive('petList', [
      petList
    ]);

})();
