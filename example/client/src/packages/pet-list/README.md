# How to test a service that uses $http

This is probably one of the most asks questions that I get from developers - How do I test an AJAX call using `$http`?

## Spec

Whenever we use `$http` we usually do two things - do something when it's successful and do something else when it returns an error. So the best way to test this type of request is by asking yourself these questions.

- Did it request the right URL?
- What happened when the request returned a response (success or fail)? Did it do something?

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