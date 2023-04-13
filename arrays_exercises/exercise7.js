function sumOfSquares(arr){
  return arr.map(num => num * num).reduce((accumulator, element) => 
  accumulator + element, 0);
}


let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83