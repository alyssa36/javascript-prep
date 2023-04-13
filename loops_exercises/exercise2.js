function factorial(number) {
  
  let total = number;
  
  for (let i = (number - 1); i > 0; i--) {
    total *= i;
  }
  
  return total;
}


console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320