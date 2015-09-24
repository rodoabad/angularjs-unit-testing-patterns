# Hello World route

This is a very simple route i.e. all the user has to do is go to `/hello-world` and the state should change to `helloWorld`.

## How to test

There are two things that you need to think about when testing routes.

 - Is the URL correct?
 - Are we using the right state for this URL?
 
With that in mind we should be testing the current `$state` and the URL `$location`.

```javascript
    it('should change the state to root.helloWorld', () => {

      let expectedUrl = '/hello-world',
        state = 'root.helloWorld';

      $state.go(state);
      $scope.$apply();

      expect($state.current.name).to.equal(state);
      expect($location.url()).to.equal(expectedUrl);

    });
```