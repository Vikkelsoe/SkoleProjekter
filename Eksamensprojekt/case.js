class Case {
  constructor(boardPos) {
    this.subCase1 = boardPos;
    this.subCase2 = [
      boardPos[6],
      boardPos[3],
      boardPos[0],
      boardPos[7],
      boardPos[4],
      boardPos[1],
      boardPos[8],
      boardPos[5],
      boardPos[2],
    ];
    this.subCase3 = [
      boardPos[8],
      boardPos[7],
      boardPos[6],
      boardPos[5],
      boardPos[4],
      boardPos[3],
      boardPos[2],
      boardPos[1],
      boardPos[0],
    ];
    this.subCase4 = [
      boardPos[2],
      boardPos[5],
      boardPos[8],
      boardPos[1],
      boardPos[4],
      boardPos[7],
      boardPos[0],
      boardPos[3],
      boardPos[6],
    ];
    this.subCase5 = [
      boardPos[2],
      boardPos[1],
      boardPos[0],
      boardPos[5],
      boardPos[4],
      boardPos[3],
      boardPos[8],
      boardPos[7],
      boardPos[6],
    ];
    this.subCase6 = [
      boardPos[8],
      boardPos[5],
      boardPos[2],
      boardPos[7],
      boardPos[4],
      boardPos[1],
      boardPos[6],
      boardPos[3],
      boardPos[0],
    ];
    this.subCase7 = [
      boardPos[6],
      boardPos[7],
      boardPos[8],
      boardPos[3],
      boardPos[4],
      boardPos[5],
      boardPos[0],
      boardPos[1],
      boardPos[2],
    ];
    this.subCase8 = [
      boardPos[0],
      boardPos[3],
      boardPos[6],
      boardPos[1],
      boardPos[4],
      boardPos[7],
      boardPos[2],
      boardPos[5],
      boardPos[8],
    ];

    this.posSub1Moves = [];
    this.posSub2Moves = [];
    this.posSub3Moves = [];
    this.posSub4Moves = [];
    this.posSub5Moves = [];
    this.posSub6Moves = [];
    this.posSub7Moves = [];
    this.posSub8Moves = [];

    this.moveWeight = [];

    for (let i = 0; i < 9; i++) {
      if (this.subCase1[i] == 0) {
        this.posSub1Moves.push(i);
      }
    }

    for (let i = 0; i < this.posSub1Moves.length; i++) {
      if (moveNum == 1) {
        this.moveWeight.push(100);
      } else if (moveNum == 3) {
        this.moveWeight.push(50);
      } else if (moveNum == 5) {
        this.moveWeight.push(10);
      } else if (moveNum == 7) {
        this.moveWeight.push(5);
      } else if (moveNum == 9) {
        this.moveWeight.push(1);
      }
    }

    for (let i = 0; i < this.posSub1Moves.length; i++) {
      if (this.posSub1Moves[i] == 0) {
        this.posSub2Moves.push(6);
        this.posSub3Moves.push(8);
        this.posSub4Moves.push(2);
        this.posSub5Moves.push(2);
        this.posSub6Moves.push(8);
        this.posSub7Moves.push(6);
        this.posSub8Moves.push(0);
      } else if (this.posSub1Moves[i] == 1) {
        this.posSub2Moves.push(3);
        this.posSub3Moves.push(7);
        this.posSub4Moves.push(5);
        this.posSub5Moves.push(1);
        this.posSub6Moves.push(5);
        this.posSub7Moves.push(7);
        this.posSub8Moves.push(3);
      } else if (this.posSub1Moves[i] == 2) {
        this.posSub2Moves.push(0);
        this.posSub3Moves.push(6);
        this.posSub4Moves.push(8);
        this.posSub5Moves.push(0);
        this.posSub6Moves.push(2);
        this.posSub7Moves.push(8);
        this.posSub8Moves.push(6);
      } else if (this.posSub1Moves[i] == 3) {
        this.posSub2Moves.push(7);
        this.posSub3Moves.push(5);
        this.posSub4Moves.push(1);
        this.posSub5Moves.push(5);
        this.posSub6Moves.push(7);
        this.posSub7Moves.push(3);
        this.posSub8Moves.push(1);
      } else if (this.posSub1Moves[i] == 4) {
        this.posSub2Moves.push(4);
        this.posSub3Moves.push(4);
        this.posSub4Moves.push(4);
        this.posSub5Moves.push(4);
        this.posSub6Moves.push(4);
        this.posSub7Moves.push(4);
        this.posSub8Moves.push(4);
      } else if (this.posSub1Moves[i] == 5) {
        this.posSub2Moves.push(1);
        this.posSub3Moves.push(3);
        this.posSub4Moves.push(7);
        this.posSub5Moves.push(3);
        this.posSub6Moves.push(1);
        this.posSub7Moves.push(5);
        this.posSub8Moves.push(7);
      } else if (this.posSub1Moves[i] == 6) {
        this.posSub2Moves.push(8);
        this.posSub3Moves.push(2);
        this.posSub4Moves.push(0);
        this.posSub5Moves.push(8);
        this.posSub6Moves.push(6);
        this.posSub7Moves.push(0);
        this.posSub8Moves.push(2);
      } else if (this.posSub1Moves[i] == 7) {
        this.posSub2Moves.push(5);
        this.posSub3Moves.push(1);
        this.posSub4Moves.push(3);
        this.posSub5Moves.push(7);
        this.posSub6Moves.push(3);
        this.posSub7Moves.push(1);
        this.posSub8Moves.push(5);
      } else if (this.posSub1Moves[i] == 8) {
        this.posSub2Moves.push(2);
        this.posSub3Moves.push(0);
        this.posSub4Moves.push(6);
        this.posSub5Moves.push(6);
        this.posSub6Moves.push(0);
        this.posSub7Moves.push(2);
        this.posSub8Moves.push(8);
      }
    }
  }

  printCase() {}
}
