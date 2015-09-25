(() => {

  'use strict';

  const expect = window.chai.expect,
    inject = window.inject,
    module = window.module,
    sinon = window.sinon;

  describe('Route: userInfo', () => {

    let $location,
      $injector,
      $scope,
      $state,
      UserInfoSvc,
      getPets,
      sandbox;

    beforeEach(() => {

      module('app', 'karma.templates');

      sandbox = sinon.sandbox.create();

      inject((
        _$location_,
        _$injector_,
        _$q_,
        _$rootScope_,
        _$state_,
        _UserInfoSvc_
      ) => {

        $location = _$location_;
        $injector = _$injector_;
        $scope = _$rootScope_.$new();
        $state = _$state_;
        UserInfoSvc = _UserInfoSvc_;
        getPets = _$q_.defer();

      });

    });

    afterEach(() => {

      sandbox.restore();

    });

    describe('Initialization', () => {

      beforeEach(() => {

        sandbox.stub(UserInfoSvc, 'getPets').returns(getPets.promise);
        getPets.resolve({});

      });

      it('should change the state to root.user', () => {

        let expectedState = 'root.user';

        $location.url('/user');
        $scope.$apply();

        expect($state.current.name).to.equal(expectedState);

      });

      it('should change the url to "/user"', () => {

        let expectedUrl = '/user';

        $state.go('root.user');
        $scope.$apply();

        expect($location.url()).to.equal(expectedUrl);

      });

    });

  });

})();
