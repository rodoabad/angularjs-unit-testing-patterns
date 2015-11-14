describe('Route: userInfo', () => {

  let $location,
    $rootScope,
    $state,
    PetListSvc,
    getPets,
    sandbox;

  beforeEach(() => {

    angular.mock.module('app');

    sandbox = sinon.sandbox.create();

    inject((_$location_,
            _$q_,
            _$rootScope_,
            _$state_,
            _PetListSvc_) => {

      $location = _$location_;
      $rootScope = _$rootScope_;
      $state = _$state_;
      PetListSvc = _PetListSvc_;
      getPets = _$q_.defer();

    });

  });

  afterEach(() => {

    sandbox.restore();

  });

  describe('Transitions', () => {

    let mockData = {
      key: 'value'
    };

    beforeEach(() => {

      sandbox.stub(PetListSvc, 'getPets')
        .returns(getPets.promise);
      getPets.resolve(mockData);

    });

    it('should change the state to root.petList', () => {

      let expectedState = 'root.petList';

      $location.url('/pet-list');
      $rootScope.$apply();

      expect($state.current.name)
        .to
        .equal(expectedState);

    });

    it('should change the url to "/pet-list"', () => {

      let expectedUrl = '/pet-list';

      $state.go('root.petList');
      $rootScope.$apply();

      expect($location.url())
        .to
        .equal(expectedUrl);

    });

    it('should resolve the data promise for the route', () => {

      let expectedData = null;

      $rootScope.$on('$viewContentLoading', ($event, $state) => {
        expectedData = $state.locals.data;
      });

      expect(expectedData)
        .to
        .equal(null);

      $state.go('root.petList');
      $rootScope.$apply();

      expect(expectedData)
        .to
        .eql(mockData);

    });

  });

});
