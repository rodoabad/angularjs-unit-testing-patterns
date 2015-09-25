# User Info Directive

This directive displays a greeting to the user if they fill in their first name. It will also show a JSON format of the current `user` object.

## How to test

The best way to test this inputs in directives is to test if they are actually happening or if the directive is reacting to the changes. Please take note that I did not say model changes although it will change anyway. If you set your mind into testing the model then you are probably thinking of testing the `$isolateScope`. This is a big NO for you if you're already thinking this way. We need to assert that the directive itself functioning properly. Model changes can pass but if the change is never communicated back to the actual front-end (HTML) then it's a useless test.

We pretty much have two scenarios here - the first one is the directive displays a greeting whenever the user types in their first name.

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

The second scenario is when the directive displays the formatted JSON for the `user` object when a user types in their information.

Notice how I have two separate expects in one test? That's because testing one input is not enough. We have to make sure that even if the `user` object has already some attributes that it will just append new attributes. Hence, our second expect will expect both the first and last name together.

```javascript
    it('should display the json data when a user enters their information', () => {

      let firstNameEl = angular.element(userInfoEl[0].querySelector('.first-name')),
        jsonEl = angular.element(userInfoEl[0].querySelector('.json')),
        lastNameEl = angular.element(userInfoEl[0].querySelector('.last-name'));

      firstNameEl.val('Rodo');
      firstNameEl.triggerHandler('input');

      expect(jsonEl.html().trim()).to.contain('Rodo');

      lastNameEl.val('Abad');
      lastNameEl.triggerHandler('input');

      expect(jsonEl.html().trim()).to.contain('Rodo').and.to.contain('Abad');

    });
```