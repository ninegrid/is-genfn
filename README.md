is-genfn
==========

Validate an es6 generator function.

```javascript
'use strict'
var bint = require('bignum'),
    isGfn = require('is-genfn');

// nifty
var fib = function*(){
  let x = bint(0), y = bint(1), z = bint(0);
  while(true){
    z = x.add(y);
    x = y;
    y = z;
    yield y;
  }
};

// yes
console.log("Is it a generator function? " + isGFn(fib);

// no
console.log("Is it a generator function? " + isGFn(fib());
```
