let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];
function evenOdd(n) {
  if (n % 2 == 0) {
    return 'even';
  } else {
    return 'odd';
  }
}

const words = myArray.map(n => evenOdd(n));
console.log(words);