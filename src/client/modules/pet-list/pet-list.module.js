import angular from 'angular';
import uiRouter from 'angular-ui-router';

import config from './pet-list.config.js';

import petList from '../../components/pet-list/pet-list.directive.js';

export default angular
  .module('app.petList', [
    uiRouter,
    petList
  ])
  .config([
    '$stateProvider',
    config
  ])
  .name;

