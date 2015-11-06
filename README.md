[![Build Status](https://travis-ci.org/rodoabad/angularjs-unit-testing-patterns.svg?branch=master)](https://travis-ci.org/rodoabad/angularjs-unit-testing-patterns) [![Coverage Status](https://coveralls.io/repos/rodoabad/angularjs-unit-testing-patterns/badge.svg?branch=master&service=github)](https://coveralls.io/github/rodoabad/angularjs-unit-testing-patterns?branch=master)

[![Join the chat at https://gitter.im/rodoabad/angularjs-unit-testing-patterns](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/rodoabad/angularjs-unit-testing-patterns?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

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

  - [How to test a directive that acts as a container](https://github.com/rodoabad/angularjs-unit-testing-patterns/tree/master/src/client/packages/main-container#how-to-test-a-directive-that-acts-as-a-container)
  - [How to test text inputs in directives](https://github.com/rodoabad/angularjs-unit-testing-patterns/tree/master/src/client/packages/user-info#how-to-test-text-inputs-in-directives) 

### Routes
 
  - [How to test routes and states](https://github.com/rodoabad/angularjs-unit-testing-patterns/tree/master/src/client/routes/hello-world#how-to-test-routes-and-states)
  - [How to test routes with resolves](https://github.com/rodoabad/angularjs-unit-testing-patterns/tree/master/src/client/routes/pet-list#how-to-test-routes-with-resolves)
 
### Services

  - [How to test a service that uses $http](https://github.com/rodoabad/angularjs-unit-testing-patterns/tree/master/src/client/packages/pet-list#how-to-test-a-service-that-uses-http)
 
# License

Copyright (c) 2015 Rodo Abad

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
