/* My attempt:

function isNotANumber(num) {
  if ((num/num === NaN) && (num.typeOf === 'number')) {
    return true;
  } else {
    return false;
  }
  
}

_____________________________________________________


> let value = NaN;
> value === NaN         
= false

> NaN === NaN
= false

NaN is the only value not equal to itself!

SOLUTION: 

function isNotANumber(value) {
  return value !== value;
}

*/