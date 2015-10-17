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