# Main Container Directive

This directive is pretty much just a container that houses your main content. There are no controller and services to test here.

## How to test

One way of testing this directive is to check if your directive actually compiles. Developers will usually test if the element exist. They grab the directive element and then test if the `length` is `1`.

```javascript
    it('should define the directive', () => {

      MainContainerEl = angular.element('<main-container></main-container>');

      expect(MainContainerEl.length).to.be.equal(1);

    });
```

Although this test will pass, it does not really test your directive. Plus if the compile fails then you will know it failed in your `beforeEach`.

A better way of testing your directive is to know what your directive does. For our directive, it is a directive that acts as the main container. By looking at the html we can see that it is loading the `<section ui-view="mainContent">` element. So as far as our app is concerned, `<main-container>` should contain `<section ui-view="mainContent">` inside of it. How do we test that? Well, we simply look for the element if it exist inside our directive and if  the attribute for that element has `mainContent`.

```javascript
    it('should contain a section that has the "mainContent" view', () => {

      let expectedView = 'mainContent',
        uiViewAttr = MainContainerEl[0].querySelector('section').getAttribute('ui-view');

      expect(uiViewAttr).to.be.equal(expectedView);

    });
```