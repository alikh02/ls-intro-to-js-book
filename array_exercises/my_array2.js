let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

for (let i = 0; i < myArray.length; i++) {
  for (let j = i; j < myArray[i].length; j++ ) {
    currentNum = myArray[i][j]
    if (currentNum % 2 == 0) {
      console.log(currentNum);
    }
  }
}