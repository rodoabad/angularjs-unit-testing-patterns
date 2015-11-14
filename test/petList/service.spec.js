describe('Service: PetListSvc', () => {

  let $httpBackend,
    PetListSvc,
    sandbox;

  beforeEach(() => {

    angular.mock.module('app');

    sandbox = sinon.sandbox.create();

    inject((_$httpBackend_,
            _PetListSvc_) => {

      $httpBackend = _$httpBackend_;
      PetListSvc = _PetListSvc_;

    });

  });

  afterEach(() => {

    sandbox.restore();

  });

  describe('Getters', () => {

    it('should get a list of pets if it is successful', () => {

      let svcResponse = null;

      let mockData = {
        key: 'value'
      };

      $httpBackend.whenGET('/api/pets')
        .respond(200, mockData);

      expect(svcResponse)
        .to
        .eql(null);

      PetListSvc.getPets()
        .then(response => svcResponse = response);
      $httpBackend.flush();

      expect(svcResponse)
        .to
        .eql(mockData);

    });

    it('should throw an error if it is not successful', () => {

      const status = 9999;

      const message = `Oops, something went wrong! We got ${status} from the server!`;

      let svcResponse = null;

      $httpBackend.whenGET('/api/pets')
        .respond(status);

      expect(svcResponse)
        .to
        .eql(null);

      expect(() => {

        PetListSvc.getPets();
        $httpBackend.flush();

      })
        .to
        .throw(message);

      expect(svcResponse)
        .to
        .eql(null);

    });

  });

});

