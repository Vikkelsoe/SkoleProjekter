function setup() {
  createCanvas(windowWidth, windowHeight);
  let testListe = summering([3, 1, 4]);
  console.log(testListe);
}

function draw() {}

function summering(listen) {
  if (listen.length == 0) {
    return 0;
  } else {
    let e = listen.pop();
    return e + summering(listen);
  }
}
