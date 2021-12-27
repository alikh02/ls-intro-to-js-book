function numberRange(num) {
  if (num >= 0 && num < 51) {
    console.log('Number is between 0 and 50');
  } else if (num >= 51 && num < 101) {
    console.log('Number is between 51 and 100');
  } else {
    console.log('Number is greater than 100, or less than 0.');
  }
}


numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);