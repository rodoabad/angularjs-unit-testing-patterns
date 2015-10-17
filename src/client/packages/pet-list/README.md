# How to test a service that uses $http

This is probably one of the most asks questions that I get from developers - How do I test an AJAX call using `$http`?

*An http request can do two things - succeed or fail*.

Which is why we need to test both cases.

## Spec

Whenever we use `$http` we usually do two things - do something when it's successful and do something else when it returns an error. So the best way to test this type of request is by asking yourself these questions.

- Did it request the right URL?
- What happened when the request returned a response (success or fail)? Did it do something?

### Success

```javascript
      it('should get a list of pets if it is successful', () => {

        let svcResponse = null;

        let mockData = {
          key: 'value'
        };

        $httpBackend.whenGET('/api/pets').respond(200, mockData);

        expect(svcResponse).to.eql(null);

        PetListSvc.getPets().then(response => svcResponse = response);
        $httpBackend.flush();

        expect(svcResponse).to.eql(mockData);

      });
```

The first thing that we did is to mock our server response and our data. We then mock the http request with `$httpbackend`. After that, we need to make sure that the mock server response that we set still has the same value since we haven't really called the method that asks for the AJAX request. When then call our method. Notice that we did not check if the method was called? We checked if the method called when successful returns the mock data that we've set.

### Fail

When looking at the service, we can see that it catches the error response and then throws a custom error message with the status code.

```javascript
      it('should throw an error if it is not successful', () => {

        const status = 9999;

        const message = `Oops, something went wrong! We got ${status} from the server!`;

        $httpBackend.whenGET('/api/pets').respond(status);

        expect(() => {

          PetListSvc.getPets();
          $httpBackend.flush();

        }).to.throw(message);

      });
```

We'll use the same methodology that we used for the success test with the exception one thing - we don't need to wait for a promise to be returned. The service does not return the promise, when it gets it it simply throws an error. If you haven't noticed yet, we wrapped the method in an IIFE. This way Karma can actually check if the error is throw since the test hasn't actually errored out yet i.e. the IIFE as a whole didn't throw an error, just a part of it.