function isNegativeZero(num) {
  return (1/num === -Infinity)
}





console.log(isNegativeZero(0));
console.log(isNegativeZero(-0));



/* I used the hint. I was trying to put num in the numerator instead and
divide by 1. Similar idea but 0 = -0 while Infinity does not equal -Infinity */
