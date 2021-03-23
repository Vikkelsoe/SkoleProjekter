//LAV UPLOAD AF DATA SYSTEMET FÆRDIG MED RYDNING OG OPRETTELSE AF CASE
//SØRG FOR DER OGSÅ UPLOADES DATA OM STATS

let computerTurn = true;
let moveNum = 1;
let draws = 0;
let gameOn = true;
let gameEndTime;
let lastResult;
let playerWins = 0;
let computerWins = 0;
let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let cases = [];
let playedCases = [];
let playedMoves = [];
let computerStats = [0];
let uploadedText1;
let uploadedText2;
let statsToPrint = "";

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

  getDataButton = createButton("Hent data");
  getDataButton.position(580, 250);
  getDataButton.mousePressed(printData);

  readCasesButton = createButton("Indlæs tidligere case-data");
  readCasesButton.position(550, 540);
  readCasesButton.mousePressed(readCase);
}

function draw() {
  drawBoard();

  if (!gameOn && frameCount >= gameEndTime + 30) {
    restartGame();
  }

  if (computerTurn && gameOn) {
    computerMove();
  }
}

function mousePressed() {
  if (!computerTurn && gameOn) {
    if (mouseX < 170) {
      if (mouseY < 170) {
        if (board[0] == 0) {
          board[0] = 2;
          moveNum += 1;
          computerTurn = true;
          checkForWin();
        }
      } else if (mouseY < 340) {
        if (board[3] == 0) {
          board[3] = 2;
          moveNum += 1;
          computerTurn = true;
          checkForWin();
        }
      } else if (mouseY < 510) {
        if (board[6] == 0) {
          board[6] = 2;
          moveNum += 1;
          computerTurn = true;
          checkForWin();
        }
      }
    } else if (mouseX < 340) {
      if (mouseY < 170) {
        if (board[1] == 0) {
          board[1] = 2;
          moveNum += 1;
          computerTurn = true;
          checkForWin();
        }
      } else if (mouseY < 340) {
        if (board[4] == 0) {
          board[4] = 2;
          moveNum += 1;
          computerTurn = true;
          checkForWin();
        }
      } else if (mouseY < 510) {
        if (board[7] == 0) {
          board[7] = 2;
          moveNum += 1;
          computerTurn = true;
          checkForWin();
        }
      }
    } else if (mouseX < 510) {
      if (mouseY < 170) {
        if (board[2] == 0) {
          board[2] = 2;
          moveNum += 1;
          computerTurn = true;
          checkForWin();
        }
      } else if (mouseY < 340) {
        if (board[5] == 0) {
          board[5] = 2;
          moveNum += 1;
          computerTurn = true;
          checkForWin();
        }
      } else if (mouseY < 510) {
        if (board[8] == 0) {
          board[8] = 2;
          moveNum += 1;
          computerTurn = true;
          checkForWin();
        }
      }
    }
  }
}

function printData() {
  subCase1s = [];
  moveWeights = [];

  for (let i = 0; i < cases.length; i++) {
    subCase1s.push(cases[i].subCase1 + "\n");
    moveWeights.push(cases[i].moveWeight + "\n");
  }

  for (let i = 1; i < computerStats.length; i++) {
    statsToPrint += str(computerStats[i]) + ",";
  }

  var blob1 = new Blob(subCase1s, {
    type: "text/plain;charset=utf-8",
  });
  saveAs(blob1, "CaseData.txt");

  var blob2 = new Blob(moveWeights, {
    type: "text/plain;charset=utf-8",
  });
  saveAs(blob2, "MoveWeightData.txt");

  var blob3 = new Blob([statsToPrint], {
    type: "text/plain;charset=utf-8",
  });
  saveAs(blob3, "StatsData.txt");
}

function readCase() {
  seperatedText = uploadedText1.split("\n");
  inputCases = [];

  for (let i = 0; i < seperatedText.length; i++) {
    currentList = [];
    for (let j = 0; j < seperatedText[i].length; j++) {
      if (seperatedText[i][j] != ",") {
        currentList.push(int(seperatedText[i][j]));
      }
    }
    if (currentList.length > 0) {
      inputCases.push(currentList);
    }
  }

  seperatedText = uploadedText2.split("\n");
  inputWeights = [];
  currentNum = "";

  for (let i = 0; i < seperatedText.length; i++) {
    currentList = [];

    for (let j = 0; j < seperatedText[i].length + 1; j++) {
      if (seperatedText[i][j] != ",") {
        currentNum += seperatedText[i][j];
      }
      if (seperatedText[i][j] == "," || j == seperatedText[i].length) {
        currentList.push(int(currentNum));
        currentNum = "";
      }
    }
    if (currentList.length > 0 && !Number.isNaN(currentList[0])) {
      inputWeights.push(currentList);
    }
  }

  console.log(inputCases);
  console.log(inputWeights);
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
  }
  currentCase = cases[currentCaseAndSub[0]];
  playedCases.push(currentCaseAndSub[0]);
  chosenMoveIndex = findMove(currentCase);
  playedMoves.push(chosenMoveIndex);

  /*
   console.log(cases[currentCaseAndSub[0]]);
  console.log(chosenMoveIndex);
  console.log("Mw: " + cases[currentCaseAndSub[0]].moveWeight);
  */

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

  moveNum += 1;
  computerTurn = false;
  checkForWin();
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

function checkForWin() {
  if (
    (board[0] == board[1] && board[0] == board[2] && board[0] == 1) ||
    (board[3] == board[4] && board[3] == board[5] && board[3] == 1) ||
    (board[6] == board[7] && board[6] == board[8] && board[6] == 1) ||
    (board[0] == board[3] && board[0] == board[6] && board[0] == 1) ||
    (board[1] == board[4] && board[1] == board[7] && board[1] == 1) ||
    (board[2] == board[5] && board[2] == board[8] && board[2] == 1) ||
    (board[0] == board[4] && board[0] == board[8] && board[0] == 1) ||
    (board[2] == board[4] && board[2] == board[6] && board[2] == 1)
  ) {
    computerWins += 1;
    lastResult = "COMPUTEREN VINDER";
    gameEndTime = frameCount;
    gameOn = false;
    computerStats.push(computerStats[computerStats.length - 1] + 1);
  } else if (
    (board[0] == board[1] && board[0] == board[2] && board[0] == 2) ||
    (board[3] == board[4] && board[3] == board[5] && board[3] == 2) ||
    (board[6] == board[7] && board[6] == board[8] && board[6] == 2) ||
    (board[0] == board[3] && board[0] == board[6] && board[0] == 2) ||
    (board[1] == board[4] && board[1] == board[7] && board[1] == 2) ||
    (board[2] == board[5] && board[2] == board[8] && board[2] == 2) ||
    (board[0] == board[4] && board[0] == board[8] && board[0] == 2) ||
    (board[2] == board[4] && board[2] == board[6] && board[2] == 2)
  ) {
    playerWins += 1;
    lastResult = "SPILLEREN VINDER";
    gameEndTime = frameCount;
    gameOn = false;
    computerStats.push(computerStats[computerStats.length - 1] - 1);
  } else if (
    board[0] != 0 &&
    board[1] != 0 &&
    board[2] != 0 &&
    board[3] != 0 &&
    board[4] != 0 &&
    board[5] != 0 &&
    board[6] != 0 &&
    board[7] != 0 &&
    board[8] != 0
  ) {
    draws += 1;
    lastResult = "SPILLET ER UAFGJORT";
    gameEndTime = frameCount;
    gameOn = false;
    computerStats.push(computerStats[computerStats.length - 1]);
  }
}

function restartGame() {
  alert(
    lastResult +
      "\n\nStilling:\nSpiller " +
      playerWins +
      " - " +
      computerWins +
      " Computer\nAntal uafgjorte: " +
      draws
  );

  for (let i = 0; i < playedCases.length; i++) {
    if (lastResult == "SPILLEREN VINDER") {
      if (cases[playedCases[i]].moveWeight[playedMoves[i]] > 0) {
        cases[playedCases[i]].moveWeight[playedMoves[i]] -= 1;
      }
    } else if (lastResult == "COMPUTEREN VINDER") {
      cases[playedCases[i]].moveWeight[playedMoves[i]] += 1;
    }
  }

  playedCases = [];
  playedMoves = [];

  computerTurn = true;
  moveNum = 1;
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  gameOn = true;
}

function drawBoard() {
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
}
