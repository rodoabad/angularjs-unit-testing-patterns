import angular from 'angular';

import config from './config';
import controller from './controller';
import service from './service';

import template from './index.html';

const directive = {
  restrict: 'E',
  template: template
};

export default angular
  .module('app.petList', [])
  .config(config)
  .controller('PetListCtrl', [
    'data',
    controller
  ])
  .service('PetListSvc', [
    '$http',
    service
  ])
  .directive('petList', () => directive)
  .name;

