(() => {

  'use strict';

  const expect = window.chai.expect,
    inject = window.inject,
    module = window.module,
    sinon = window.sinon;

  describe('Routes', () => {

    let $location,
      $scope,
      $state,
      sandbox;

    beforeEach(() => {

      module('app', 'karma.templates');

      sandbox = sinon.sandbox.create();

      inject((
        _$location_,
        _$rootScope_,
        _$state_
      ) => {

        $location = _$location_;
        $scope = _$rootScope_.$new();
        $state = _$state_;

      });

    });

    afterEach(() => {

      sandbox.restore();

    });

    it('should change the state to root', () => {

      let expectedUrl = '/',
        state = 'root';

      $state.go(state);
      $scope.$apply();

      expect($state.current.name).to.equal(state);
      expect($location.url()).to.equal(expectedUrl);

    });

    it('should change the state to root.helloWorld', () => {

      let expectedUrl = '/hello-world',
        state = 'root.helloWorld';

      $state.go(state);
      $scope.$apply();

      expect($state.current.name).to.equal(state);
      expect($location.url()).to.equal(expectedUrl);

    });

  });

})();
