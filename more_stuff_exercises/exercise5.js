function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

/*
string.split returns an array of parts of the string split at blank spaces ' '
(an array of the words in the string).
.reverse will rearrage this array so that the words are in reverse order (the 
last word is now first).
.map will take each value (or word) in the array and return a new array that 
instead of the words themselves, includes each word's length.
*/