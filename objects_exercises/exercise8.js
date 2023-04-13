function copyObj(oldObject, copyItems) {
  
  let finishedObject = {};
  
  if (copyItems) {
  copyItems.forEach(function(item){ 
    finishedObject[item] = oldObject[item];
  });
  return finishedObject;
} else {
  finishedObject = oldObject;
  return finishedObject;
}}




let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }