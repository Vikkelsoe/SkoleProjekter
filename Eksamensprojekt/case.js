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

    for (let i = 0; i < 9; i++) {
      if (board[i] == 0) {
        this.posSub1Moves.push(i);
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
        //fortsæt systemet
        case 2:
          this.posSub2Moves.push(0);
        case 3:
          this.posSub2Moves.push(7);
        case 4:
          this.posSub2Moves.push(4);
        case 5:
          this.posSub2Moves.push(1);
        case 6:
          this.posSub2Moves.push(8);
        case 7:
          this.posSub2Moves.push(5);
        case 8:
          this.posSub2Moves.push(2);
      }
    }

    //det samme for sub4, sub5, sub6, sub6, sub7
  }

  printCase() {}
}
