(() => {

  'use strict';

  const expect = window.chai.expect,
    inject = window.inject,
    module = window.module,
    sinon = window.sinon;

  describe('Service: PetListSvc', () => {

    let $httpBackend,
      PetListSvc,
      sandbox;

    let mockData = {
      key: 'value'
    };

    beforeEach(() => {

      module('app', 'karma.templates');

      sandbox = sinon.sandbox.create();

      inject((
        _$httpBackend_,
        _PetListSvc_
      ) => {

        $httpBackend = _$httpBackend_;
        PetListSvc = _PetListSvc_;

      });

    });

    afterEach(() => {

      sandbox.restore();

    });

    describe('Getters', () => {

      beforeEach(() => {

        $httpBackend.whenGET('/api/pets').respond(200, mockData);

      });

      it('should get a list of pets', () => {

        let svcResponse = null;

        expect(svcResponse).to.eql(null);

        PetListSvc.getPets().then(response => svcResponse = response);
        $httpBackend.flush();

        expect(svcResponse).to.eql(mockData);

      });

    });

  });

})();
