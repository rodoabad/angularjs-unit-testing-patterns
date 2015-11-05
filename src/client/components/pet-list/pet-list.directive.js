import angular from 'angular';

import template from './pet-list.html';

function petList() {

  return {
    restrict: 'E',
    template: template,
    bindToController: true
  };

}

export default angular
  .module('pet.list', [])
  .directive('petList', [
    petList
  ])
  .name;

