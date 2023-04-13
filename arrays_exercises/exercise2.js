let myArray = [1, 3, 6, 11, 4, 2,
               4, 9, 17, 16, 0];
               
let evenNumbers = myArray.filter(num => num % 2 === 0);
console.log(evenNumbers)


/* 
Alternate solution more in line with solution in book (logging each value
instead of a new array containing the values).

myArray.forEach(function(num) {
  if (num % 2 === 0) {
    console.log(num);
  }
});

*/