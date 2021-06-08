function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {}

function divisorer(n) {
  let divs = [];
  for (i = 1; i <= n / 2; i++) {
    if (n % i == 0) {
      divs.push(i);
    }
  }
  return divs;
}

console.log(divisorer(100));
