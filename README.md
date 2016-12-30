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

// specify arguments for your function
var args = [1, 2];
var optimiserResult = optimiser(someModule, args);

console.log(optimiserResult); // prints "Function is optimized"
```

The module returns a string which can be outputted to console, parsed inside a test or used anyway you like.

```
node yourFile.js
```

## Test + Linter
```
npm run test
npm run lint
```

## How
Using available low level diagnostic commands in the V8 engine, can ask if a given function is optimized. See below for possible reasons why.


## Why?
Inspired by an article from Bluebird on V8 optimising.
- https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#2-unsupported-syntax
- http://bahmutov.calepin.co/detecting-function-optimizations-in-v8.html
