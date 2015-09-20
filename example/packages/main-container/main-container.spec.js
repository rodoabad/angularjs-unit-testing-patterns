(() => {

  'use strict';

  const angular = window.angular,
    expect = window.chai.expect,
    inject = window.inject,
    module = window.module,
    sinon = window.sinon;

  describe('MainContainer', () => {

    let $compile,
      $scope,
      MainContainerEl,
      sandbox;

    beforeEach(() => {

      module('app', 'karma.templates');

      sandbox = sinon.sandbox.create();

      inject((_$compile_, _$rootScope_) => {

        $compile = _$compile_;

        $scope = _$rootScope_.$new();

      });

      MainContainerEl = angular.element('<main-container></main-container>');

      $compile(MainContainerEl)($scope);
      $scope.$apply();

    });

    afterEach(() => {

      sandbox.restore();

    });

    it('should contain the user info directive', () => {

      let userInfoEl = angular.element(MainContainerEl[0].querySelector('user-info'));

      expect(userInfoEl.length).to.be.equal(1);

    });

  });

})();
