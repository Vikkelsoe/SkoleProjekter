let computerTurn = true;
let moveNum = 1;

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
          moveNum += 1;
          computerTurn = true;
        }
      } else if (mouseY < 340) {
        if (board[3] == 0) {
          board[3] = 2;
          checkForWin();
          moveNum += 1;
          computerTurn = true;
        }
      } else if (mouseY < 510) {
        if (board[6] == 0) {
          board[6] = 2;
          checkForWin();
          moveNum += 1;
          computerTurn = true;
        }
      }
    } else if (mouseX < 340) {
      if (mouseY < 170) {
        if (board[1] == 0) {
          board[1] = 2;
          checkForWin();
          moveNum += 1;
          computerTurn = true;
        }
      } else if (mouseY < 340) {
        if (board[4] == 0) {
          board[4] = 2;
          checkForWin();
          moveNum += 1;
          computerTurn = true;
        }
      } else if (mouseY < 510) {
        if (board[7] == 0) {
          board[7] = 2;
          checkForWin();
          moveNum += 1;
          computerTurn = true;
        }
      }
    } else if (mouseX < 510) {
      if (mouseY < 170) {
        if (board[2] == 0) {
          board[2] = 2;
          checkForWin();
          moveNum += 1;
          computerTurn = true;
        }
      } else if (mouseY < 340) {
        if (board[5] == 0) {
          board[5] = 2;
          checkForWin();
          moveNum += 1;
          computerTurn = true;
        }
      } else if (mouseY < 510) {
        if (board[8] == 0) {
          board[8] = 2;
          checkForWin();
          moveNum += 1;
          computerTurn = true;
        }
      }
    }
  }
}

function computerMove() {
  let currentCaseAndSub = findCaseAndSub();
  let currentCase;
  let chosenMoveIndex;

  if (currentCaseAndSub.length == 0) {
    cases.push(
      new Case([
        board[0],
        board[1],
        board[2],
        board[3],
        board[4],
        board[5],
        board[6],
        board[7],
        board[8],
      ])
    );
    currentCaseAndSub = [cases.length - 1, 1];
    console.log("En ny case blev oprettet");
  }
  console.log(cases[cases.length - 1]);
  currentCase = cases[currentCaseAndSub[0]];
  chosenMoveIndex = findMove(currentCase);
  console.log(chosenMoveIndex);

  if (currentCaseAndSub[1] == 1) {
    board[currentCase.posSub1Moves[chosenMoveIndex]] = 1;
  } else if (currentCaseAndSub[1] == 2) {
    board[currentCase.posSub2Moves[chosenMoveIndex]] = 1;
  } else if (currentCaseAndSub[1] == 3) {
    board[currentCase.posSub3Moves[chosenMoveIndex]] = 1;
  } else if (currentCaseAndSub[1] == 4) {
    board[currentCase.posSub4Moves[chosenMoveIndex]] = 1;
  } else if (currentCaseAndSub[1] == 5) {
    board[currentCase.posSub5Moves[chosenMoveIndex]] = 1;
  } else if (currentCaseAndSub[1] == 6) {
    board[currentCase.posSub6Moves[chosenMoveIndex]] = 1;
  } else if (currentCaseAndSub[1] == 7) {
    board[currentCase.posSub7Moves[chosenMoveIndex]] = 1;
  } else if (currentCaseAndSub[1] == 8) {
    board[currentCase.posSub8Moves[chosenMoveIndex]] = 1;
  }

  checkForWin();
  moveNum += 1;
  computerTurn = false;
}

function findCaseAndSub() {
  let foundCaseAndSub = [];
  for (let i = 0; i < cases.length; i++) {
    if (checkIfEqual(board, cases[i].subCase1)) {
      foundCaseAndSub = [i, 1];
    } else if (checkIfEqual(board, cases[i].subCase2)) {
      foundCaseAndSub = [i, 2];
    } else if (checkIfEqual(board, cases[i].subCase3)) {
      foundCaseAndSub = [i, 3];
    } else if (checkIfEqual(board, cases[i].subCase4)) {
      foundCaseAndSub = [i, 4];
    } else if (checkIfEqual(board, cases[i].subCase5)) {
      foundCaseAndSub = [i, 5];
    } else if (checkIfEqual(board, cases[i].subCase6)) {
      foundCaseAndSub = [i, 6];
    } else if (checkIfEqual(board, cases[i].subCase7)) {
      foundCaseAndSub = [i, 7];
    } else if (checkIfEqual(board, cases[i].subCase8)) {
      foundCaseAndSub = [i, 8];
    }
  }
  return foundCaseAndSub;
}

function findMove(detectedCase) {
  let moveIndex;
  let pointSum = 0;
  for (let i = 0; i < detectedCase.moveWeight.length; i++) {
    pointSum += detectedCase.moveWeight[i];
  }

  if (pointSum == 0) {
    console.log("Ingen gunstige træk. Computeren giver op");
  } else {
    chosenPoint = random(1, pointSum);
    runCount = 0;
    for (let i = 0; i < detectedCase.moveWeight.length; i++) {
      runCount += detectedCase.moveWeight[i];
      if (chosenPoint <= runCount) {
        moveIndex = i;
        break;
      }
    }
  }
  return moveIndex;
}

//funktion kontrollerer om to lister af samme længde har ens elementer i ens rækkefølge
function checkIfEqual(list1, list2) {
  let equals = 0;
  for (let j = 0; j < list1.length; j++) {
    if (list1[j] == list2[j]) {
      equals++;
    }
  }

  if (equals == list1.length && equals == list2.length) {
    return true;
  } else {
    return false;
  }
}

function checkForWin() {}
