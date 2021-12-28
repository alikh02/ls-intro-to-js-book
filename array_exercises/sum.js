function sumOfSquares(arr) {
  let numSquare = arr.map(n => n*n);
  let sum = numSquare.reduce((acc, el) => acc + el);
  return sum; 
}


let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83

