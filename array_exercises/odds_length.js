function oddLengths(arr) {
  let oddNumbers = arr.filter(n => n.length % 2 !== 0);
  let numLengths = oddNumbers.map(num => num.length);
  return numLengths;
}


let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]