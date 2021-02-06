class Case {
  constructor(board) {
    this.subCase1 = board;
    this.subCase2 = [
      board[6],
      board[3],
      board[0],
      board[7],
      board[4],
      board[1],
      board[8],
      board[5],
      board[2],
    ];
    this.subCase3 = [
      board[8],
      board[7],
      board[6],
      board[5],
      board[4],
      board[3],
      board[2],
      board[1],
      board[0],
    ];
    this.subCase4 = [
      board[2],
      board[5],
      board[8],
      board[1],
      board[4],
      board[7],
      board[0],
      board[3],
      board[6],
    ];
    this.subCase5 = [
      board[2],
      board[1],
      board[0],
      board[5],
      board[4],
      board[3],
      board[8],
      board[7],
      board[6],
    ];
    this.subCase6 = [
      board[8],
      board[5],
      board[2],
      board[7],
      board[4],
      board[1],
      board[6],
      board[3],
      board[0],
    ];
    this.subCase7 = [
      board[6],
      board[7],
      board[8],
      board[3],
      board[4],
      board[5],
      board[0],
      board[1],
      board[2],
    ];
    this.subCase8 = [
      board[0],
      board[3],
      board[6],
      board[1],
      board[4],
      board[7],
      board[2],
      board[5],
      board[8],
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
      if (board[i] == 0) {
        this.posSub1Moves.push(i);
      }
    }

    for (let i = 0; i < this.posSub1Moves.length; i++) {
      switch (moveNum) {
        case 1:
          this.moveWeight.push(100);
        case 3:
          this.moveWeight.push(50);
        case 5:
          this.moveWeight.push(10);
        case 7:
          this.moveWeight.push(5);
        case 9:
          this.moveWeight.push(1);
      }
    }

    for (let i = 0; i < this.posSub1Moves.length; i++) {
      switch (this.posSub1Moves[i]) {
        case 0:
          this.posSub2Moves.push(6);
          this.posSub3Moves.push(8);
          this.posSub4Moves.push(2);
          this.posSub5Moves.push(2);
          this.posSub6Moves.push(8);
          this.posSub7Moves.push(6);
          this.posSub8Moves.push(0);
        case 1:
          this.posSub2Moves.push(3);
          this.posSub3Moves.push(7);
          this.posSub4Moves.push(5);
          this.posSub5Moves.push(1);
          this.posSub6Moves.push(5);
          this.posSub7Moves.push(7);
          this.posSub8Moves.push(3);
        case 2:
          this.posSub2Moves.push(0);
          this.posSub3Moves.push(6);
          this.posSub4Moves.push(8);
          this.posSub5Moves.push(0);
          this.posSub6Moves.push(2);
          this.posSub7Moves.push(8);
          this.posSub8Moves.push(6);
        case 3:
          this.posSub2Moves.push(7);
          this.posSub3Moves.push(5);
          this.posSub4Moves.push(1);
          this.posSub5Moves.push(5);
          this.posSub6Moves.push(7);
          this.posSub7Moves.push(3);
          this.posSub8Moves.push(1);
        case 4:
          this.posSub2Moves.push(4);
          this.posSub3Moves.push(4);
          this.posSub4Moves.push(4);
          this.posSub5Moves.push(4);
          this.posSub6Moves.push(4);
          this.posSub7Moves.push(4);
          this.posSub8Moves.push(4);
        case 5:
          this.posSub2Moves.push(1);
          this.posSub3Moves.push(3);
          this.posSub4Moves.push(7);
          this.posSub5Moves.push(3);
          this.posSub6Moves.push(1);
          this.posSub7Moves.push(5);
          this.posSub8Moves.push(7);
        case 6:
          this.posSub2Moves.push(8);
          this.posSub3Moves.push(2);
          this.posSub4Moves.push(0);
          this.posSub5Moves.push(8);
          this.posSub6Moves.push(6);
          this.posSub7Moves.push(0);
          this.posSub8Moves.push(2);
        case 7:
          this.posSub2Moves.push(5);
          this.posSub3Moves.push(1);
          this.posSub4Moves.push(3);
          this.posSub5Moves.push(7);
          this.posSub6Moves.push(3);
          this.posSub7Moves.push(1);
          this.posSub8Moves.push(5);
        case 8:
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

  move(subCase, chosenMove) {}

  printCase() {}
}
