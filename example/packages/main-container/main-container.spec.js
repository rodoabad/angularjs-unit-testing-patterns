(function () {

  'use strict';

  var angular = window.angular,
    expect = window.chai.expect,
    inject = window.inject,
    module = window.module,
    sinon = window.sinon;

  describe('MainContainer', function () {

    var $compile,
      $scope,
      MainContainerEl,
      sandbox;

    beforeEach(function () {

      module('app', 'karma.templates');

      sandbox = sinon.sandbox.create();

      inject(function (_$compile_, _$rootScope_) {

        $compile = _$compile_;

        $scope = _$rootScope_.$new();

      });

      MainContainerEl = angular.element('<main-container></main-container>');

      $compile(MainContainerEl)($scope);
      $scope.$apply();

    });

    afterEach(function () {

      sandbox.restore();

    });

    it('should contain the user info directive', function () {

      var userInfoEl = angular.element(MainContainerEl[0].querySelector('user-info'));

      expect(userInfoEl.length).to.be.equal(1);

    });

  });

})();
