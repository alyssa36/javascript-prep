/* 

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

for (let key in myObj) {
  console.log(key);
}

These will log different things. Object.keys will not include keys inherited
from the prototype object. The For...in iteration will include keys from the 
prototype, although it will list them after the object's own keys.

*/