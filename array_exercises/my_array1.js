let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
function isEven(n) {
  if (n % 2 == 0) {
    console.log(n);
  }
}

myArray.forEach(num => isEven(num));