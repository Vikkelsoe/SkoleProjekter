let computerTurn = false;

let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

let cases = [];

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

  for (let i = 0; i < board.length; i++) {
    if (board[i] == 1) {
      strokeWeight(2);
      stroke("black");
      fill("red");
      circle(positionsX[i], positionsY[i], 130);
      fill(200);
      circle(positionsX[i], positionsY[i], 100);
    } else if (board[i] == 2) {
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

  if (computerTurn) {
    computerMove();
  }
}

function mousePressed() {
  if (!computerTurn) {
    if (mouseX < 170) {
      if (mouseY < 170) {
        if (board[0] == 0) {
          board[0] = 2;
          checkForWin();
          computerTurn = true;
        }
      } else if (mouseY < 340) {
        if (board[3] == 0) {
          board[3] = 2;
          checkForWin();
          computerTurn = true;
        }
      } else if (mouseY < 510) {
        if (board[6] == 0) {
          board[6] = 2;
          checkForWin();
          computerTurn = true;
        }
      }
    } else if (mouseX < 340) {
      if (mouseY < 170) {
        if (board[1] == 0) {
          board[1] = 2;
          checkForWin();
          computerTurn = true;
        }
      } else if (mouseY < 340) {
        if (board[4] == 0) {
          board[4] = 2;
          checkForWin();
          computerTurn = true;
        }
      } else if (mouseY < 510) {
        if (board[7] == 0) {
          board[7] = 2;
          checkForWin();
          computerTurn = true;
        }
      }
    } else if (mouseX < 510) {
      if (mouseY < 170) {
        if (board[2] == 0) {
          board[2] = 2;
          checkForWin();
          computerTurn = true;
        }
      } else if (mouseY < 340) {
        if (board[5] == 0) {
          board[5] = 2;
          checkForWin();
          computerTurn = true;
        }
      } else if (mouseY < 510) {
        if (board[8] == 0) {
          board[8] = 2;
          checkForWin();
          computerTurn = true;
        }
      }
    }
  }
}

function computerMove() {
  findCase();
}

function findCase() {
  for (let i = 0; i < cases.length; i++) {}
}

function checkIfEqual(list1, list2) {}

function findMove(currenCase) {}

function checkForWin() {}
