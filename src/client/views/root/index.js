import angular from 'angular';

import config from './config';

import template from './index.html';

function directive() {
  return {
    restrict: 'E',
    template: template
  };
}

export default angular
  .module('app.root', [])
  .config(config)
  .directive('mainContainer', directive)
  .name;
