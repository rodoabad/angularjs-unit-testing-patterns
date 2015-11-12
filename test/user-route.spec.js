import '../src/client/app';

describe('Route: user', () => {

  let $location,
    $scope,
    $state,
    sandbox;

  beforeEach(() => {

    angular.mock.module('app');

    sandbox = sinon.sandbox.create();

    inject((_$location_,
            _$rootScope_,
            _$state_) => {

      $location = _$location_;
      $scope = _$rootScope_.$new();
      $state = _$state_;

    });

  });

  afterEach(() => {

    sandbox.restore();

  });

  it('should change the state to root.user', () => {

    let expectedState = 'root.user';

    $location.url('/user');
    $scope.$apply();

    expect($state.current.name)
      .to
      .equal(expectedState);

  });

  it('should change the url to "/user"', () => {

    let expectedUrl = '/user';

    $state.go('root.user');
    $scope.$apply();

    expect($location.url())
      .to
      .equal(expectedUrl);

  });

});
