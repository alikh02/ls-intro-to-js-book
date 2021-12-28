function oddLengths(arr) {
  return arr.reduce( (accArr, el) => {
    let length = el.length;
    if (length % 2 !== 0) {
      accArr.push(length);
    }
    return accArr;
  }, []);
}



let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]