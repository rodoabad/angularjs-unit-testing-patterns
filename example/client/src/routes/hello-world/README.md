# How to test routes and states

There are a couple of things that you need to think about when testing routes and states.

 - Is the URL correct?
 - Are we using the right state for this URL?
 
With that in mind we should be testing the current `$state` and the URL `$location`.

## Injections

We need to inject the following dependencies:

- `$location` - We'll be checking if the state that we transitioned into has the right URL assigned to it.
- `$rootScope` - Whenever we change the state or URL, we need to let AngularJS know that there has been a change. We do not have `$scope` available yet, we have to use `$rootScope`.
- `$state` - We'll be checking if the URL that we transitioned into has the right state assigned to it.

```javascript
      inject((
        _$location_,
        _$rootScope_,
        _$state_
      ) => {

        $location = _$location_;
        $rootScope = _$rootScope_;
        $state = _$state_;

      });
```

## Specs

First test would be if you change or go to the specified URL, then the state should change.

```javascript
    it('should change the state to root.helloWorld', () => {

      let expectedState = 'root.helloWorld';

      $location.url('/hello-world');
      $rootScope.$apply();

      expect($state.current.name).to.equal(expectedState);

    });
```

The second test would then test if changing the state will also change the URL.

```javascript
    it('should change the url to "/hello-world"', () => {

      let expectedUrl = '/hello-world';

      $state.go('root.helloWorld');
      $rootScope.$apply();

      expect($location.url()).to.equal(expectedUrl);

    });
```
