(function () {

  'use strict';

  var angular = window.angular,
    expect = window.chai.expect,
    inject = window.inject,
    module = window.module,
    sinon = window.sinon;

  describe('UserInfo', function () {

    var $compile,
      $scope,
      userInfoEl,
      sandbox;

    beforeEach(function () {

      module('app', 'karma.templates');

      sandbox = sinon.sandbox.create();

      inject(function (_$compile_, _$rootScope_) {

        $compile = _$compile_;

        $scope = _$rootScope_.$new();

      });

      userInfoEl = angular.element('<user-info></user-info>');

      $compile(userInfoEl)($scope);
      $scope.$apply();

    });

    afterEach(function () {

      sandbox.restore();

    });

    it('should greet the user when they enter their first name', function () {

      var firstNameEl = angular.element(userInfoEl[0].querySelector('.first-name')),
        greetingsEl = angular.element(userInfoEl[0].querySelector('.greetings'));

      var expectedGreetings = 'Hello there, Rodo! How are you?';

      firstNameEl.val('Rodo');
      firstNameEl.triggerHandler('input');

      expect(greetingsEl.html().trim()).to.equal(expectedGreetings);

    });

    it('should display the json data when a user enters their information', function () {

      var firstNameEl = angular.element(userInfoEl[0].querySelector('.first-name')),
        jsonEl = angular.element(userInfoEl[0].querySelector('.json')),
        lastNameEl = angular.element(userInfoEl[0].querySelector('.last-name'));

      firstNameEl.val('Rodo');
      firstNameEl.triggerHandler('input');

      expect(jsonEl.html().trim()).to.contain('Rodo');

      lastNameEl.val('Abad');
      lastNameEl.triggerHandler('input');

      expect(jsonEl.html().trim()).to.contain('Rodo').and.to.contain('Abad');

    });

  });

})();
