/* En lille test af om det virker */
let computerTurn = false;

let activeCrosses = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let activeNoughts = [0, 0, 0, 0, 0, 0, 0, 0, 0];

/*
Spilbrættet benævnes således:
0 | 1 | 2
----------
3 | 4 | 5
----------
6 | 7 | 8
*/

let positionsX = {
  0: 85,
  1: 255,
  2: 425,
  3: 85,
  4: 255,
  5: 425,
  6: 85,
  7: 255,
  8: 425,
};
let positionsY = {
  0: 85,
  1: 85,
  2: 85,
  3: 255,
  4: 255,
  5: 255,
  6: 425,
  7: 425,
  8: 425,
};

function setup() {
  createCanvas(510, 510);
}

function draw() {
  background(200);
  strokeWeight(2);
  stroke("black");
  line(170, 0, 170, 510);
  line(340, 0, 340, 510);
  line(0, 170, 510, 170);
  line(0, 340, 510, 340);

  for (let i = 0; i < activeCrosses.length; i++) {
    if (activeCrosses[i] == 1) {
      strokeWeight(10);
      stroke("green");
      line(
        positionsX[i] - 65,
        positionsY[i] - 65,
        positionsX[i] + 65,
        positionsY[i] + 65
      );
      line(
        positionsX[i] + 65,
        positionsY[i] - 65,
        positionsX[i] - 65,
        positionsY[i] + 65
      );
    }
  }

  for (let i = 0; i < activeNoughts.length; i++) {
    if (activeNoughts[i] == 1) {
      strokeWeight(2);
      stroke("black");
      fill("red");
      circle(positionsX[i], positionsY[i], 130);
      fill(200);
      circle(positionsX[i], positionsY[i], 100);
    }
  }
}

function mousePressed() {
  if (!computerTurn) {
    if (mouseX < 170) {
      if (mouseY < 170) {
        if (activeCrosses[0] == 0) {
          activeCrosses[0] = 1;
          computerTurn = true;
        }
      } else if (mouseY < 340) {
        if (activeCrosses[3] == 0) {
          activeCrosses[3] = 1;
          computerTurn = true;
        }
      } else if (mouseY < 510) {
        if (activeCrosses[6] == 0) {
          activeCrosses[6] = 1;
          computerTurn = true;
        }
      }
    } else if (mouseX < 340) {
      if (mouseY < 170) {
        if (activeCrosses[1] == 0) {
          activeCrosses[1] = 1;
          computerTurn = true;
        }
      } else if (mouseY < 340) {
        if (activeCrosses[4] == 0) {
          activeCrosses[4] = 1;
          computerTurn = true;
        }
      } else if (mouseY < 510) {
        if (activeCrosses[7] == 0) {
          activeCrosses[7] = 1;
          computerTurn = true;
        }
      }
    } else if (mouseX < 510) {
      if (mouseY < 170) {
        if (activeCrosses[2] == 0) {
          activeCrosses[2] = 1;
          computerTurn = true;
        }
      } else if (mouseY < 340) {
        if (activeCrosses[5] == 0) {
          activeCrosses[5] = 1;
          computerTurn = true;
        }
      } else if (mouseY < 510) {
        if (activeCrosses[8] == 0) {
          activeCrosses[8] = 1;
          computerTurn = true;
        }
      }
    }
  }
}
