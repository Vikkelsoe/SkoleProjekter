let xoff = 0;
let xoff2 = 0;
let startx = 0;
let startx2 = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("lightblue");

  fill("grey");
  beginShape();
  xoff = startx;
  vertex(0, height);
  for (let x = 0; x < width; x++) {
    vertex(x, (height / 3) * noise(xoff));
    xoff += 0.01;
  }
  vertex(width, height);
  endShape(CLOSE);
  startx += 0.01;

  fill("green");
  beginShape();
  xoff2 = startx2;
  vertex(0, height);
  for (let x = 0; x < width; x++) {
    vertex(x, 2 * (height / 2) * noise(xoff2));
    xoff2 += 0.001;
  }
  vertex(width, height);
  endShape(CLOSE);
  startx2 += 0.01;
}

/*
let x = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (x % 40 == 0) {
    fill("red");
    circle(x, random(height), 20);
    fill("green");
    circle(x, noise(x) * height, 20);
  }
  x++;
}
*/

/*
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let x = 0; x < width; x++) {
    if (x % 50 == 0) {
      y = windowHeight * noise(x);
      //y = random(windowHeight);
      fill("red");
      circle(x, y, 5);
    }
  }
}

function draw() {}
*/
