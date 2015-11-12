import angular from 'angular';

import config from './config';
import controller from './controller';

import template from './index.html';

function directive() {
  return {
    restrict: 'E',
    template: template,
    bindToController: true
  };
}

export default angular
  .module('app.User', [])
  .config(config)
  .controller('UserInfoCtrl', controller)
  .directive('userInfo', directive)
  .name;
