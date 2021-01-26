function genererData(n) {
  let x, y; // x og y er input
  let t;
  let i = []; // træningsinput
  let o = []; // træningsoutput

  for (let j = 0; j < n; j++) {
    x = random(width / 2);
    y = random(height / 2);
    t = 0;
    i.push([1, x, y]);
    o.push(t);

    x = random(width / 2, width);
    y = random(height / 2, height);
    t = 1;
    i.push([1, x, y]);
    o.push(t);
  }
  return [i, o];
}

function tegnData(i, o) {
  let x, y, t;
  for (var j = 0; j < i.length; j++) {
    if (o[j] === 0) {
      fill("red");
    } else if (o[j] === 1) {
      fill("blue");
    }
    x = i[j][1];
    y = i[j][2];
    circle(x, y, 10);
  }
}

function tegnLinje(a, b, c) {
  // ax + by + c = 0
  // hvis a=0 og b=0 er der ingen linje
  // hvis a = 0 hedder linjen y = -c/b (vandret)
  // hvis b = 0 hedder linjen x = -c/a (lodret)
  // ellers: y = -a/bx -c/b

  if (a === 0 && b === 0) {
    console.log("Fejl");
  } else if (a === 0) {
    line(0, -c / b, width, -c / b);
  } else if (b === 0) {
    line(-c / a, 0, -c / a, height);
  } else {
    line(0, -c / b, width, (-a / b) * width - c / b);
  }
}

function initialiserVægte() {
  return [-900, 1, 1];
}

function sum(i, w) {
  return math.dot(i, w);
}

function aktivering(s) {
  if (s > 0) {
    return 1;
  } else {
    return 0;
  }
}

function træn(i, o, w, r) {
  let p; // perceptrons output med nuværende vægte
  let t; // forventede output ifølge træningsdata

  for (var j = 0; j < i.length; j++) {
    p = aktivering(sum(i[j], w));
    t = o[j];
    if (p != t) {
      // opdatering af vægte: w = w + r(t-p)*i
      for (var k = 0; k < w.length; k++) {
        w[k] = w[k] + r * (t - p) * i[j][k];
      }
    }
  }
}

// globale variabler
let d, i, o, w, r;

function setup() {
  createCanvas(windowWidth, windowHeight);
  d = genererData(20);
  i = d[0];
  o = d[1];

  w = initialiserVægte();
  r = 1;
}

function draw() {
  background(220);
  tegnData(i, o);
  træn(i, o, w, r);
  tegnLinje(w[1], w[2], w[0]);
}

function keyPressed() {
  if (keyCode === 83) {
    // stop (s)
    noLoop();
    console.log("Stoppet træning. Vægtene er nu:", w);
  }
  if (keyCode === 71) {
    // go (g)
    loop();
    console.log("Træner...");
  }
}
