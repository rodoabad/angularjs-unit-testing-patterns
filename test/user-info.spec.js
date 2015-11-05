  const angular = window.angular,
    expect = window.chai.expect,
    inject = window.inject,
    module = window.module,
    sinon = window.sinon;

  describe('Package: UserInfo', () => {

    let $compile,
      $scope,
      userInfoEl,
      sandbox;

    beforeEach(() => {

      module('app');

      sandbox = sinon.sandbox.create();

      inject((
        _$compile_,
        _$rootScope_
      ) => {

        $compile = _$compile_;
        $scope = _$rootScope_.$new();

      });

      userInfoEl = angular.element('<user-info></user-info>');

      $compile(userInfoEl)($scope);
      $scope.$apply();

    });

    afterEach(() => {

      sandbox.restore();

    });

    it('should greet the user when they enter their first name', () => {

      let firstNameEl = angular.element(userInfoEl[0].querySelector('.first-name')),
        greetingsEl = angular.element(userInfoEl[0].querySelector('.greetings'));

      let expectedGreetings = 'Hello there, Rodo! How are you?';

      firstNameEl.val('Rodo');
      firstNameEl.triggerHandler('input');

      expect(greetingsEl.html().trim()).to.equal(expectedGreetings);

    });

  });
