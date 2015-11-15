[![Build Status](https://travis-ci.org/rodoabad/angularjs-unit-testing-patterns.svg?branch=master&style=flat-square)](https://travis-ci.org/rodoabad/angularjs-unit-testing-patterns) [![Dependency Status](https://david-dm.org/rodoabad/angularjs-unit-testing-patterns.svg?style=flat-square)](https://david-dm.org/rodoabad/angularjs-unit-testing-patterns) [![devDependency Status](https://david-dm.org/rodoabad/angularjs-unit-testing-patterns/dev-status.svg?style=flat-square)](https://david-dm.org/rodoabad/angularjs-unit-testing-patterns#info=devDependencies)

# Angular Unit Testing Patterns

There is a lot of guides out there explaining how to use [AngularJS](https://github.com/angular/angular) and [Karma](https://github.com/karma-runner/karma) together. However, there isn't really a lot of guides explaining how you should test your controllers, services, directives, and anything in between.

Hopefully, this guide sheds some light on what you actually need to test and explain why you should be testing it that way. Most of the patterns that you see here are patterns that I myself use on my projects.

## Styleguide Used

  - [AngularJS ES6 Styleguide](https://github.com/rodoabad/angularjs-es6-styleguide) by [@rodoabad](https://github.com/rodoabad)

## Installation

```bash
git clone git@github.com:rodoabad/angularjs-unit-testing-patterns.git testing-patterns
cd testing-patterns
npm install
```

## Table of Concents
 
### Directives

  - [How to test a directive that acts as a container](#how-to-test-a-directive-that-acts-as-a-container)
  - [How to test text inputs in directives](#how-to-test-text-inputs-in-directives)

### Routes
 
  - [How to test routes and states](#how-to-test-routes-and-states)
  - [How to test routes with resolves](#how-to-test-routes-with-resolves)
 
### Services

  - [How to test a service that uses $http](#how-to-test-a-service-that-uses-http)

# How to test a directive that acts as a container

One way of testing this directive is to check if your directive actually compiles. Developers will usually test if the element exist. They grab the directive element and then test if the `length` is `1`.

```javascript
    it('should define the directive', () => {

      MainContainerEl = angular.element('<main-container></main-container>');

      expect(MainContainerEl.length).to.be.equal(1);

    });
```

Although this test will pass, it does not really test your directive. Plus if the compile fails then you will know it failed in your `beforeEach`.

## Specs

A better way of testing your directive is to know what your directive does. For our directive, it is a directive that acts as the main container. By looking at the html we can see that it is loading the `<section ui-view="mainContent">` element. So as far as our app is concerned, `<main-container>` should contain `<section ui-view="mainContent">` inside of it. How do we test that? Well, we simply look for the element if it exist inside our directive and if  the attribute for that element has `mainContent`.

```javascript
    it('should contain a section that has the "mainContent" view', () => {

      let expectedView = 'mainContent',
        uiViewAttr = MainContainerEl[0].querySelector('section').getAttribute('ui-view');

      expect(uiViewAttr).to.be.equal(expectedView);

    });
```

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

# How to test text inputs in directives

The best way to test this inputs in directives is to test if they are actually happening or if the directive is reacting to the changes. Please take note that I did not say model changes although it will change anyway. If you set your mind into testing the model then you are probably thinking of testing the `$isolateScope`. This is a big NO for you if you're already thinking this way. We need to assert that the directive itself functioning properly. Model changes can pass but if the change is never communicated back to the actual front-end (HTML) then it's a useless test.

The scenario that we'd like to test is when a directive displays a greeting whenever the user types in their first name.

## Specs

```javascript
    it('should greet the user when they enter their first name', () => {

      let firstNameEl = angular.element(userInfoEl[0].querySelector('.first-name')),
        greetingsEl = angular.element(userInfoEl[0].querySelector('.greetings'));

      let expectedGreetings = 'Hello there, Rodo! How are you?';

      firstNameEl.val('Rodo');
      firstNameEl.triggerHandler('input');

      expect(greetingsEl.html().trim()).to.equal(expectedGreetings);

    });
```

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

# How to test routes with resolves

There are a couple of things that you need to think about when testing routes with resolve.

 - Is the URL correct?
 - Are we using the right state for this URL?
 - Were the promises resolved?

With that in mind we should first be testing the current `$state` and the URL `$location`. In some of our tests, we just switched to the state or go the the URL that we want to test and check if either the state and URL is correct. When your route uses `resolve`, you have to resolve the promises first before your state can finish loading.

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

# License

Copyright (c) 2015 Rodo Abad

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
