class UpCase {
  constructor(inCases, inWeights) {
    //subcase 1 sættes lig opstillingen i den givne tekststreng, og derfra sker der en rotation og spejling af denne opstilling i de øvrige subcases
    this.subCase1 = [
      inCases[0],
      inCases[1],
      inCases[2],
      inCases[3],
      inCases[4],
      inCases[5],
      inCases[6],
      inCases[7],
      inCases[8],
    ];
    this.subCase2 = [
      inCases[6],
      inCases[3],
      inCases[0],
      inCases[7],
      inCases[4],
      inCases[1],
      inCases[8],
      inCases[5],
      inCases[2],
    ];
    this.subCase3 = [
      inCases[8],
      inCases[7],
      inCases[6],
      inCases[5],
      inCases[4],
      inCases[3],
      inCases[2],
      inCases[1],
      inCases[0],
    ];
    this.subCase4 = [
      inCases[2],
      inCases[5],
      inCases[8],
      inCases[1],
      inCases[4],
      inCases[7],
      inCases[0],
      inCases[3],
      inCases[6],
    ];
    this.subCase5 = [
      inCases[2],
      inCases[1],
      inCases[0],
      inCases[5],
      inCases[4],
      inCases[3],
      inCases[8],
      inCases[7],
      inCases[6],
    ];
    this.subCase6 = [
      inCases[8],
      inCases[5],
      inCases[2],
      inCases[7],
      inCases[4],
      inCases[1],
      inCases[6],
      inCases[3],
      inCases[0],
    ];
    this.subCase7 = [
      inCases[6],
      inCases[7],
      inCases[8],
      inCases[3],
      inCases[4],
      inCases[5],
      inCases[0],
      inCases[1],
      inCases[2],
    ];
    this.subCase8 = [
      inCases[0],
      inCases[3],
      inCases[6],
      inCases[1],
      inCases[4],
      inCases[7],
      inCases[2],
      inCases[5],
      inCases[8],
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
      //blanke felter i subcase 1 bliver noteret som mulige træk
      if (this.subCase1[i] == 0) {
        this.posSub1Moves.push(i);
      }
    }

    for (let i = 0; i < this.posSub1Moves.length; i++) {
      //moveWeight pointene hentes fra den givne tekststreng
      this.moveWeight.push(inWeights[i]);
    }

    for (let i = 0; i < this.posSub1Moves.length; i++) {
      //de mulige træk i subcase 1 blivet overført til de øvrige cases ved rotation og spejling
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
}
