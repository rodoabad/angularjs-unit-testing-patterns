# Hello World route

This is a very simple route i.e. all the user has to do is go to `/hello-world` and the state should change to `helloWorld`.

## How to test

There are a couple of things that you need to think about when testing routes.

 - Is the URL correct?
 - Are we using the right state for this URL?
 
With that in mind we should be testing the current `$state` and the URL `$location`.

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
