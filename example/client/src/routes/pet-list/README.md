# How to test routes with resolves

There are a couple of things that you need to think about when testing routes with resolve.

 - Is the URL correct?
 - Are we using the right state for this URL?
 - Were the promises resolved?

With that in mind we should first be testing the current `$state` and the URL `$location`. In some of our tests, we just switched to the state or go the the URL that we want to test and check if either the state and URL is correct. When your route uses `resolve`, you have to resolve the promises first before your state can finish loading.

## Injections

We need to inject the following dependencies:

- `$location` - We'll be checking if the state that we transitioned into has the right URL assigned to it.
- `$q` - To handle our promises.
- `$rootScope` - Whenever we change the state or URL, we need to let AngularJS know that there has been a change. We do not have `$scope` available yet, we have to use `$rootScope`.
- `$state` - We'll be checking if the URL that we transitioned into has the right state assigned to it.
- `PetListSvc` - The service that we need.

```javascript
      inject((
        _$location_,
        _$q_,
        _$rootScope_,
        _$state_,
        _PetListSvc_
      ) => {

        $location = _$location_;
        $rootScope = _$rootScope_;
        $state = _$state_;
        PetListSvc = _PetListSvc_;
        getPets = _$q_.defer();

      });
```

## Before Each

Since we're now dealing with `resolve` we can `stub` the methods if they are not local.
 
*Why?* We can `stub` them since it is not part of the SUT (script under test). As a reminder if ever you find a method that is not part of the SUT, just stub them and make your life easier.

Let's start by stubbing it in our `beforeEach` function since it has to resolve every time we check the state or URL. Don't forget to add a mock return!

```javascript
    describe('Transitions', () => {

      let mockData = {
        key: 'value'
      };

      beforeEach(() => {

        sandbox.stub(PetListSvc, 'getPets').returns(getPets.promise);
        getPets.resolve(mockData);

      });

    });
```

## Specs

Now that we've mocked it properly, let's start adding our two core tests - one for the state, and another for the URL.

```javascript
    describe('Transitions', () => {

      let mockData = {
        key: 'value'
      };

      beforeEach(() => {

        sandbox.stub(PetListSvc, 'getPets').returns(getPets.promise);
        getPets.resolve(mockData);

      });

      it('should change the state to root.petList', () => {

        let expectedState = 'root.petList';

        $location.url('/pet-list');
        $rootScope.$apply();

        expect($state.current.name).to.equal(expectedState);

      });

      it('should change the url to "/pet-list"', () => {

        let expectedUrl = '/pet-list';

        $state.go('root.petList');
        $rootScope.$apply();

        expect($location.url()).to.equal(expectedUrl);

      });

    });
```

Now it's time to test the `resolve` promises.

```javascript
      it('should resolve the data promise for the route', () => {

        let expectedData = null;

        $rootScope.$on('$viewContentLoading', ($event, $state) => {
          expectedData = $state.locals.data;
        });

        expect(expectedData).to.equal(null);

        $state.go('root.petList');
        $rootScope.$apply();

        expect(expectedData).to.eql(mockData);

      });
```

- The first thing that we did here is declare our `expectedData` to be null. Because that is the first thing that we'll check - if the state hasn't been instantiated yet, then our data should be `null`.
- Next we'll listen to the event `$viewContentLoading` which is the event fired once the view begins loading but before the DOM is rendered. This allows us to catch the resolved promises as it goes out of `resolve` and into our views (where our controller resides).
- We then transition to the state that we want to test.
- After that, we'll make sure that `expectedData` has been assigned the proper value.
 
Here's what our final test looks like.

```javascript
    describe('Transitions', () => {

      let mockData = {
        key: 'value'
      };

      beforeEach(() => {

        sandbox.stub(PetListSvc, 'getPets').returns(getPets.promise);
        getPets.resolve(mockData);

      });

      it('should change the state to root.petList', () => {

        let expectedState = 'root.petList';

        $location.url('/pet-list');
        $rootScope.$apply();

        expect($state.current.name).to.equal(expectedState);

      });

      it('should change the url to "/pet-list"', () => {

        let expectedUrl = '/pet-list';

        $state.go('root.petList');
        $rootScope.$apply();

        expect($location.url()).to.equal(expectedUrl);

      });

      it('should resolve the data promise for the route', () => {

        let expectedData = null;

        $rootScope.$on('$viewContentLoading', ($event, $state) => {
          expectedData = $state.locals.data;
        });

        expect(expectedData).to.equal(null);

        $state.go('root.petList');
        $rootScope.$apply();

        expect(expectedData).to.eql(mockData);

      });

    });
```
