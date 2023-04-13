function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();


/*

Variables:
hello, greeting, name, xyzzy, howdy, foo 

Object Property Names:
a, b, c, d (AND INDEXES OF 0, 1, 2 for interior array)


Primitive Values:
' ', 1, 2, 3, 4, 5, 'Hi', 'Grace' (ALSO OBJECT PROPERTY NAMES ARE STRINGS AND 
ARE PRIMITIVE VALUES - a, b, c, d, 0, 1, 2)


Objects:
hello function, xyzzy function, [3, 4, 5], {}, 
{ a: 1, b: 2, c: [3, 4, 5], d: {} }

*/