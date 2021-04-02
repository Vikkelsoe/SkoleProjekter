/*
Spilbrættet benævnes således:
0 | 1 | 2
----------
3 | 4 | 5
----------
6 | 7 | 8
*/

let computerTurn = true;
let moveNum = 1;
let gameOn = true;
let gameEndTime;
let lastResult;
let playerWins = 0;
let computerWins = 0;
let draws = 0;
let board = [0, 0, 0, 0, 0, 0, 0, 0, 0]; //positionen på brættet. 0 er tomt, 1 er bolle (computer) og 2 er kryds (bruger)
let cases = [];
let playedCases = []; //holder styr på, hvilke cases, computeren har anvendt i en runde
let playedMoves = []; //holder styr på, hvilke træk, computeren har udført i de anvendte cases
let computerStats = [0]; //element 0 er 0, næste element er lig forrige element, hvis uafgjort, forrige element +1, hvis computer vinder og forrige element -1, hvis spiller vinder

//Variabler til down- og upload af data
let statsToPrint = "";
let subCase1s = [];
let moveWeights = [];
let uploadedText1;
let uploadedText2;
let uploadedText3;

//koordinaterne til midtpunkterne på brættets felter
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

//setup køres én gang ved start af programmet
function setup() {
  createCanvas(510, 510);

  getDataButton = createButton("Hent data");
  getDataButton.position(580, 250);
  getDataButton.mousePressed(printData);

  readCasesButton = createButton("Indlæs tidligere case-data");
  readCasesButton.position(550, 540);
  readCasesButton.mousePressed(readCase);
}

//draw køres adskillige gange i sekundet
function draw() {
  drawBoard(); //tegner brættet med de aktuelle brikker på

  if (!gameOn && frameCount >= gameEndTime + 30) {
    restartGame(); //restarter spillet, hvis det er slut
  }

  if (computerTurn && gameOn) {
    computerMove(); //lader computeren trække, hvis spillet er igang og det er computerens tur
  }
}

//mousePressed kører hver gang brugeren klikker med musen
function mousePressed() {
  //hvis det er spillerens tur og spillet er igang, identificeres det i hvilket felt brugeren trykker ud fra musens koordinater
  //derefter opdateres board-listen med et 2-tal, dvs. et kryds sættes, turen skifter, og det undersøges, om spilleren har vundet

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

//funktion kaldes, når "Hent data"-knappen trykkes
function printData() {
  subCase1s = [];
  moveWeights = [];

  //alle subcase-1s og deres tilhørende moveWeight data gemmes i to lister
  for (let i = 0; i < cases.length; i++) {
    subCase1s.push(cases[i].subCase1 + "\n");
    moveWeights.push(cases[i].moveWeight + "\n");
  }

  statsToPrint = "";
  statsToPrint +=
    str(playerWins) + ":" + str(computerWins) + ":" + str(draws) + ":";

  //computer-stats listen gemmes i en kommasepareret tekststreng
  for (let i = 0; i < computerStats.length; i++) {
    statsToPrint += str(computerStats[i]) + ",";
  }

  //case data om alle subcase 1s, moveWeight data, og statistikdata gemmes i tre tekstfiler, som downloades med saveAs() (fra FileSaver.js, der er hentet fra internettet)
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

//funktion kaldes, når brugeren uploader de tre datafiler
function readCase() {
  seperatedText = uploadedText1.split("\n");
  inputCases = [];

  //case-data opstilles i en liste
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

  //moveWeight-data opstilles i en liste
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

  //cases og statistik resettes
  cases = [];
  playerWins = 0;
  computerWins = 0;
  draws = 0;

  //der dannes nye cases med de uploadede case-data
  for (let i = 0; i < inputCases.length; i++) {
    cases.push(new UpCase(inputCases[i], inputWeights[i]));
  }

  seperatedText = uploadedText3.split(":");
  playerWins = int(seperatedText[0]);
  computerWins = int(seperatedText[1]);
  draws = int(seperatedText[2]);
  computerStats = [];
  currentNum = "";

  //computerstats opstilles i en liste
  for (let i = 0; i < seperatedText[3].length; i++) {
    if (seperatedText[3][i] != ",") {
      currentNum += seperatedText[3][i];
    }
    if (seperatedText[3][i] == "," || i == seperatedText[3].length) {
      computerStats.push(int(currentNum));
      currentNum = "";
    }
  }

  alert(
    "Der er blevet indlæst " +
      inputCases.length +
      " cases fra filerne samt tilhørende statistiske data."
  ); //pop-up vindue med bekræftelse for upload vises
}

function computerMove() {
  let currentCaseAndSub = findCaseAndSub(); //den aktuelle case og dens subcase bestemmes. Returnerer en liste [case, subcase]
  let currentCase;
  let chosenMoveIndex;

  if (currentCaseAndSub.length == 0) {
    //hvis ikke der blev fundet en case herover, oprettes en ny
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
  chosenMoveIndex = findMove(currentCase); //computerens træk-index vælges ud fra den aktuelle case
  playedMoves.push(chosenMoveIndex);

  //computerens træk registreres i baard-listen ud fra cases, subcase og det fundne træk-index
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
  checkForWin(); //det undersøges, om computeren har vundet
}

function findCaseAndSub() {
  let foundCaseAndSub = [];
  for (let i = 0; i < cases.length; i++) {
    //alle cases i case-lsiten loopes igennem, og det undersøges om der er et match mellem board og et af casens 8 subcases
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
  return foundCaseAndSub; //den fundne case og subcase returneres som en liste [case, subcase]
}

function findMove(detectedCase) {
  let moveIndex;
  let pointSum = 0;
  for (let i = 0; i < detectedCase.moveWeight.length; i++) {
    //en samlet sandsynlighedsmasse beregnes som en sum af alle point i den pågældende case's moveWeight-liste
    pointSum += detectedCase.moveWeight[i];
  }

  if (pointSum == 0) {
    //computeren giver op, hvis summen i moveWeight er lig 0 (dvs. AI'en vurderer, at der ingen gunstige træk er)
    alert("Ingen gunstige træk. Computeren giver op!");
    playerWins += 1;
    lastResult = "SPILLEREN VINDER";
    gameEndTime = frameCount;
    gameOn = false;
    computerStats.push(computerStats[computerStats.length - 1] - 1);
  } else {
    chosenPoint = random(1, pointSum); //et tilfældigt point mellem 1 og point-summen udvælges
    runCount = 0;

    /*et moveIndex udvælges som det index, hvor summen af dette index's moveWeight-point
    og alle forrige index's moveWeight-point i listen er større end eller lig det valgte point, chosenPoint
    Eksempel:
    chosen point: 17
    moveWeight[10, 15, 34]
    "summeret moveWeight" [10, 25, 59] (ikke en faktisk liste, men illustrer, hvordan der tænkes her)
    da index nr. 1 er det index, hvor summen af indexets point og alle forrige indexpoint er
    større end eller lig med det valgte point (25 er større end 17), bliver index nr. 1 valgt som moveIndex
    */

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

function checkIfEqual(list1, list2) {
  //funktionen kontrollerer om to lister af samme længde har ens elementer i ens rækkefølge
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
    //en hvilken som helst kombination af tre boller på stribe tjekkes. I så fald noteres computeren for sejr, og denne spilrunde stopper ved at sætte gameOn lig false
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
    //en hvilken som helst kombination af tre krdys på stribe tjekkes. I så fald noteres spilleren for sejr, og denne spilrunde stopper ved at sætte gameOn lig false
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
    //hvis ingen har vundet, og spilbrættet er fyldt ud, noteres der uafgjort, og spillet stopper ved at sætte gameOn lig false
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
  ); //pop-up vindue med stillingen vises

  for (let i = 0; i < playedCases.length; i++) {
    if (lastResult == "SPILLEREN VINDER") {
      //hvis spilleren vinder, straffes de træk computeren tog ved at fjerne et point for disse træk i de pågældende cases
      if (cases[playedCases[i]].moveWeight[playedMoves[i]] > 0) {
        cases[playedCases[i]].moveWeight[playedMoves[i]] -= 1;
      }
    } else if (lastResult == "COMPUTEREN VINDER") {
      //hvis computeren vinder, belønnes de træk computeren tog ved at tilføje et point for disse træk i de pågældende cases
      cases[playedCases[i]].moveWeight[playedMoves[i]] += 1;
    }
  }

  //relevante variabler nulstilles herunder
  playedCases = [];
  playedMoves = [];

  computerTurn = true;
  moveNum = 1;
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  console.log(cases);
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
    //for hvert felt på brættet
    if (board[i] == 1) {
      //tegn bolle, hvis feltet er lig 1
      strokeWeight(2);
      stroke("black");
      fill("red");
      circle(positionsX[i], positionsY[i], 130);
      fill(200);
      circle(positionsX[i], positionsY[i], 100);
    } else if (board[i] == 2) {
      //tegn kryds, hvis feltet er lig 2
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
