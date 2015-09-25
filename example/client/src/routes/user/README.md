# User route

This route now uses ui-route's `resolve` which is a way to provide our controller with content or data that is custom to the state. For this scenario, we'll be resolving a data object coming from a service (UserInfoSvc).

## How to test

There are a couple of things that you need to think about when testing routes with resolve.

 - Is the URL correct?
 - Are we using the right state for this URL?
 - Were the promises resolved?

With that in mind we should first be testing the current `$state` and the URL `$location`. In some of our tests, we just switched to the state or go the the URL that we want to test and check if either the state and URL is correct. When your route uses `resolve`, you have to resolve the promises first before your state can finish loading.

So let's first mock our service. We'll just be mocking it since we're not really testing the service.

```javascript
    describe('Initialization', () => {

      let mockData = {
        key: 'value'
      };

      beforeEach(() => {

        sandbox.stub(UserInfoSvc, 'getPets').returns(getPets.promise);
        getPets.resolve(mockData);

      });

    });
```

Now that we've mocked it properly, let's start adding our two core tests - one for the state, and another for the URL.

```javascript
    describe('Initialization', () => {

      let mockData = {
        key: 'value'
      };

      beforeEach(() => {

        sandbox.stub(UserInfoSvc, 'getPets').returns(getPets.promise);
        getPets.resolve(mockData);

      });

      it('should change the state to root.user', () => {

        let expectedState = 'root.user';

        $location.url('/user');
        $rootScope.$apply();

        expect($state.current.name).to.equal(expectedState);

      });

      it('should change the url to "/user"', () => {

        let expectedUrl = '/user';

        $state.go('root.user');
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

        $state.transitionTo('root.user');
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
    describe('Initialization', () => {

      let mockData = {
        key: 'value'
      };

      beforeEach(() => {

        sandbox.stub(UserInfoSvc, 'getPets').returns(getPets.promise);
        getPets.resolve(mockData);

      });

      it('should change the state to root.user', () => {

        let expectedState = 'root.user';

        $location.url('/user');
        $rootScope.$apply();

        expect($state.current.name).to.equal(expectedState);

      });

      it('should change the url to "/user"', () => {

        let expectedUrl = '/user';

        $state.go('root.user');
        $rootScope.$apply();

        expect($location.url()).to.equal(expectedUrl);

      });

      it('should resolve the data promise for the route', () => {

        let expectedData = null;

        $rootScope.$on('$viewContentLoading', ($event, $state) => {
          expectedData = $state.locals.data;
        });

        expect(expectedData).to.equal(null);

        $state.transitionTo('root.user');
        $rootScope.$apply();

        expect(expectedData).to.eql(mockData);

      });

    });
```
