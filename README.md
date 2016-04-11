# Check V8 Optimised

Check if your module/function is optimized for the V8 engine. Download it and run it against (and from within) any module/function very quickly.

If it isn't check the WHY section below on reading material to help find reasons why and optimize your code.

## Install
```
npm install check-v8-optimised
```

## Usage
```js
var optimiser = require('check-v8-optimised');
var someModule = require('./someModule');

var argumentString = '1,2';
var optimiserResult = optimiser(someModule, argumentString);

console.log(optimiserResult); // prints "Function is optimized"
```

The module returns a string which can be outputted to console, parsed inside a test or used anyway you like.

`argumentString` takes any potential arguements as a string, can support any number but must be in correct format. e.g. for a function with arguments `(first, second, third)` hand as `'1,2,3'` etc.

Also you must run node with the below flag enabled. It is the V8 native engine command.

```
node --allow-natives-syntax yourFile.js
```

## Test + Linter
```
npm run test
npm run lint
```

Why is lib/index.js left out of linting?

As ESLint parses the whole file into AST first, and then processes it, there was no way to disable the parser for the character %.

## How
Using available low level diagnostic commands in the V8 engine, can ask if a given function is optimized. See below for possible reasons why.


## Why?
Inspired by an article from Bluebird on V8 optimising.
- https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#2-unsupported-syntax
- http://bahmutov.calepin.co/detecting-function-optimizations-in-v8.html
