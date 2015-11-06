import angular from 'angular';

import config from './config.js';

import petList from './list.js';

export default angular
  .module('app.petList', [])
  .config(config)
  .directive('petList', petList)
  .name;

