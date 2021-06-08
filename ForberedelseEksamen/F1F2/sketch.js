function setup() {
  createCanvas(windowWidth, windowHeight);
  f2();
}

function draw() {}

function f1(a, b, c) {
  if (b == 1) throw "Division med 0";
  else if ((a + 1) / (b - 1) - c <= 0) throw "Imaginært resultat";
  let resultat = ((a + 1) / (b - 1) - c) ** 0.5;
  console.log(resultat);
  return resultat;
}

function f2() {
  try {
    //f1(3, 5, 1);
    //f1(5, 1, 2);
    f1(8, 3, 2);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("Færdig med fejlbehandling");
  }
}
