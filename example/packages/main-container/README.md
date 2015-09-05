# Main Container Directive

This directive is pretty much just a container that houses your other directives. There are no controller and services to test here, just a directive that loads other directives.

## How to test

One way of testing this directive is to check if your directive actually compiles. Developers will usually test if the element exist. They grab the directive element and then test if the `length` is `1`.

```javascript
    it('should define the directive', function () {

      MainContainerEl = angular.element('<main-container></main-container>');

      expect(MainContainerEl.length).to.be.equal(1);

    });
```

Although this test will pass, it does not really test your directive. Please if the compile fails then you will know it failed in your `beforeEach`.

A better way of testing your directive is to know what your directive does. For our directive, it is a directive that loads other directives. By looking at the html we can see that it is loading the `<user-info>` element which is another directive in our packages. So as far as our app is concerned, `<main-container>` should contain `<user-info>` inside of it. How do we test that? Well, we simply look for the element if it exist inside our directive.

```javascript
    it('should contain the user info directive', function () {

      var userInfoEl = angular.element(MainContainerEl[0].querySelector('user-info'));

      expect(userInfoEl.length).to.be.equal(1);

    });
```