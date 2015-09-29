# How to test routes and states

There are a couple of things that you need to think about when testing routes and states.

 - Is the URL correct?
 - Are we using the right state for this URL?
 
With that in mind we should be testing the current `$state` and the URL `$location`.

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
