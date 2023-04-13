function oddLengths(strings) {
  return strings.reduce((filteredNumbersArray, letters) => {
    let length = letters.length;
    if (length % 2 === 1) {
      filteredNumbersArray.push(length);
    }

    return filteredNumbersArray;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));



/* I did not solve this on my own. I tried several things but relied on the
solution given. This problem is marked as extra challenging and says not to 
be discouraged if you can't solve it on your own yet. */