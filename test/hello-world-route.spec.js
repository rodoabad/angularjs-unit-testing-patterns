const expect = window.chai.expect,
  inject = window.inject,
  module = window.module,
  sinon = window.sinon;

describe('Route: helloWorld', () => {

  let $location,
    $rootScope,
    $state,
    sandbox;

  beforeEach(() => {

    module('app');

    sandbox = sinon.sandbox.create();

    inject((_$location_,
            _$rootScope_,
            _$state_) => {

      $location = _$location_;
      $rootScope = _$rootScope_;
      $state = _$state_;

    });

  });

  afterEach(() => {

    sandbox.restore();

  });

  it('should change the state to root.helloWorld', () => {

    let expectedState = 'root.helloWorld';

    $location.url('/helloWorld');
    $rootScope.$apply();

    expect($state.current.name)
      .to
      .equal(expectedState);

  });

  it('should change the url to "/helloWorld"', () => {

    let expectedUrl = '/helloWorld';

    $state.go('root.helloWorld');
    $rootScope.$apply();

    expect($location.url())
      .to
      .equal(expectedUrl);

  });

});