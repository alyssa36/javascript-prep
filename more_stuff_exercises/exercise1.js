let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

/* 
This will log [1, 4, 3] because array2 points to the same array as array1.

*/