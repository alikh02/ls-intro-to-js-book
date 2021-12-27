function isNum(num) {
  let numCheck = typeof num === 'number' ? true : false;
  return numCheck;
}

function evenOrOdd(num) {
  if (isNum(num)) {
    if (num % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd')
    }
  } else {
    console.log('Error.. not a number!');
  }
}

evenOrOdd(57);