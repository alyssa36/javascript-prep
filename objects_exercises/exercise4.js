let obj = {
  b: 2,
  a: 1,
  c: 3,
};



let keysArray = Object.keys(obj);

let upperCaseKeys = keysArray.map((key) => 
  key.toUpperCase()
)

console.log(upperCaseKeys)