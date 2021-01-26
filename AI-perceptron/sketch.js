let trainingData = [
  [0.2, 0.8],
  [0.95, 0.2],
  [0.49, 0.51],
  [0.6, 0.4],
  [0.15, 0.98],
  [0.51, 0.49],
  [0.03, 0.65],
  [0.74, 0.25],
  [0.43, 0.87],
  [0.8, 0.33],
  [0.32, 0.56],
  [0.84, 0.13],
  [0.2, 0.6],
  [0.91, 0.28],
  [0.45, 0.7],
];

let targets = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1];

let learningRate = 0.1;

let perceptronOut = [];

let wx = [0];
let wy = [0];
let wb = [0];

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

function trainPerceptron() {
  for (let i = 0; i < trainingData.length; i++) {
    perceptronOut.push(
      activationFn(
        trainingData[i][0],
        wx[i],
        trainingData[i][1],
        wy[i],
        1,
        wb[i]
      )
    );
    if (perceptronOut[i] == targets[i]) {
      wx.push(wx[i]);
      wy.push(wy[i]);
      wb.push(wb[i]);
    } else {
      wx.push(
        updateWeight(
          wx[i],
          learningRate,
          targets[i],
          perceptronOut[i],
          trainingData[i][0]
        )
      );
      wy.push(
        updateWeight(
          wy[i],
          learningRate,
          targets[i],
          perceptronOut[i],
          trainingData[i][1]
        )
      );
      wb.push(
        updateWeight(wb[i], learningRate, targets[i], perceptronOut[i], 1)
      );
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  trainPerceptron();
  console.log("i, t, p(i), wx, wy, wb");

  for (let i = 0; i < perceptronOut.length; i++) {
    console.log(
      trainingData[i],
      targets[i],
      perceptronOut[i],
      wx[i],
      wy[i],
      wb[i]
    );
  }
}
