let num = 4936

let ones = num % 10;
num = num - ones;
let tens = (num % 100) / 10;
num = num - (tens * 10);
let hundreds = (num % 1000) / 100;
num = num - (hundreds * 100); 
let thousands = (num % 10000) / 1000;

let sum = ones + tens + hundreds + thousands

console.log(sum)