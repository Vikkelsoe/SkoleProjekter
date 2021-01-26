let trainingData = [];
let targets = [];
let learningRate = 0.1;
let perceptronOut = [];
let counter = 0;
let time = 0;

let wx = [0];
let wy = [0];
let wb = [0];

function createTrainingPoints() {
  for (let i = 0; i < 100; i++) {
    x = round(random(0, 500), 0);
    y = round(random(0, 500), 0);
    while (y == x) {
      y = round(random(0, 500), 0);
    }

    if (x > y) {
      t = 0;
    } else {
      t = 1;
    }

    trainingData.push([x, y]);
    targets.push(t);
  }
}

function activationFn(ix, wx, iy, wy, bi, wbi) {
  sumProduct = ix * wx + iy * wy + bi * wbi;
  if (sumProduct > 0) {
    return 1;
  } else {
    return 0;
  }
}

function updateWeight(wi, alfa, t, pOut, pIni) {
  return round(wi + alfa * (t - pOut) * pIni, 5);
}

function trainPerceptron(c) {
  perceptronOut.push(
    activationFn(trainingData[c][0], wx[c], trainingData[c][1], wy[c], 1, wb[c])
  );
  if (perceptronOut[c] == targets[c]) {
    wx.push(wx[c]);
    wy.push(wy[c]);
    wb.push(wb[c]);
  } else {
    wx.push(
      updateWeight(
        wx[c],
        learningRate,
        targets[c],
        perceptronOut[c],
        trainingData[c][0]
      )
    );
    wy.push(
      updateWeight(
        wy[c],
        learningRate,
        targets[c],
        perceptronOut[c],
        trainingData[c][1]
      )
    );
    wb.push(updateWeight(wb[c], learningRate, targets[c], perceptronOut[c], 1));
  }
}

function setup() {
  createCanvas(500, 500);
  background("gray");

  createTrainingPoints();
  console.log(trainingData);
}

function draw() {
  background("gray");
  for (let i = 0; i < targets.length; i++) {
    if (targets[i] == 0) {
      fill("blue");
    } else {
      fill("red");
    }
    circle(trainingData[i][0], trainingData[i][1], 5);
  }

  if (counter < 100) {
    if (time % 5 == 0) {
      console.log("Nu");
      trainPerceptron(counter);
      counter += 1;
    }
  } else if (counter == 100) {
    alert("Færdig");
    counter += 1;
  }

  line(
    0,
    -wb[wb.length - 1] / wy[wy.length - 1],
    500,
    (-wx[wx.length - 1] * 500 - wb[wb.length - 1]) / wy[wy.length - 1]
  );

  time += 1;
}
