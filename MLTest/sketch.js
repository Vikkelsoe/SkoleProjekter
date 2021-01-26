// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
let classifier;

// A variable to hold the image we want to classify
let img;

function preload() {
  classifier = ml5.imageClassifier("MobileNet");
  img = loadImage("images/redPanda.png");
}

function setup() {
  createCanvas(400, 400);
  classifier.classify(img, gotResult);
  image(img, 0, 0);
}

// A function to run when we get any errors and the results
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  } else {
    // The results are in an array ordered by confidence.
    console.log(results);
    for (let i = 0; i < results.length; i++) {
      createDiv("Label: " + results[i].label);
      createDiv("Confidence: " + nf(results[i].confidence, 0, 2));
      createElement("Br");
    }
  }
}
