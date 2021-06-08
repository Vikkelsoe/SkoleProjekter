function setup() {
  //printNumbers(false, 10);
  //printNumbers();
  printNumbers(true, 12);
}

function printNumbers(even, n) {
  if (even == undefined || n == undefined) {
    even = false;
    n = 10;
  }

  if (even) {
    for (i = 0; i < n + 1; i += 2) {
      console.log(i);
    }
  } else {
    for (i = 1; i < n + 1; i += 2) {
      console.log(i);
    }
  }
}
