describe('Route: root', () => {

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

  it('should change the state to root', () => {

    let expectedUrl = '/',
      state = 'root';

    $state.go(state);
    $scope.$apply();

    expect($state.current.name)
      .to
      .equal(state);
    expect($location.url())
      .to
      .equal(expectedUrl);

  });

});