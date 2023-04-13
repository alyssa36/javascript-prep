function containsThree(array) {
  let threeArray = array.filter(num => num === 3)
    if (threeArray.length === 0) {
      console.log('false - does not contain 3');
    } else {
      console.log('true - it contains 3');
    }
  }


let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];


containsThree(numbers1)
containsThree(numbers2)
containsThree(numbers3)


/* Now here is the easy way: 

console.log(numbers1.includes(3))
console.log(numbers2.includes(3))
console.log(numbers3.includes(3))

*/
