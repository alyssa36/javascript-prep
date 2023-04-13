function bar(arg1, arg2) {
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar('Victor', 'Antonina');


/* 

Variables:

bar, arg1, arg2, foo, qux, result


Object Property Names:

abc, def, ghi, jkl, mno, pqr, 0, 1, 2, 3 (for array indexes)

Primitive Values:

'Hello', 1, 2, 3, 4, 5, 6, null, NaN, 'Victor', 'Antonina', all object property
names (abc, def, ghi, jkl, mno, pqr, 0, 1, 2, 3)


Objects:

bar function, [4, 5, 6], [1, 2, 3, [4, 5, 6]], 
{
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  }
  
  */