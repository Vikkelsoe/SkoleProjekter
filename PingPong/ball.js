class Ball {
  constructor() {
    this.x = windowWidth / 2;
    this.y = windowHeight / 2;
    this.d = 20;

    //sætter boldens b-komposant i retningsvektoren til et tilfældigt tal mellem 3 og 8 eller -3 og -8
    this.startSignB = random(-1, 1);
    this.startValueB = random(3, 8);
    if (this.startSignB >= 0) {
      this.b = this.startValueB;
    } else {
      this.b = -this.startValueB;
    }

    //beregner boldens a-komposant i retningsvektoren vha. Pythagoras' og b-komposanten, så retningsvektorens længde (boldens hastighed) bliver 10
    this.startValueA = (10 ** 2 - this.b ** 2) ** 0.5;
    this.startSignA = random(-1, 1);
    if (this.startSignA >= 0) {
      this.a = this.startValueA;
    } else {
      this.a = -this.startValueA;
    }

    this.backDetection = 0; //variabel, der er 0, når bolden ikke rør en bagvæg, og 1, når den gør
  }

  //bolden tegnes som en rød cirkel, og this.playerCheck() og this.borderCheck() køres
  draw() {
    fill("red");
    circle(this.x, this.y, this.d);
    this.x = this.x + this.a;
    this.y = this.y + this.b;
    this.playerCheck();
    this.borderCheck();
  }

  borderCheck() {
    //hvis bolden rammer en bagvæg, så sættes backDetection til 1
    if (this.x > windowWidth - this.d / 2) {
      this.backDetection = 1;
    }

    if (this.x < 0 + this.d / 2) {
      this.backDetection = 1;
    }

    //hvis bolden rammer top eller bund, så negeres b-komposanten i retningsvektoren (indfaldsvinkel lig udfaldsvinkel)
    if (this.y > windowHeight - this.d / 2) {
      this.b = -this.b;
    }

    if (this.y < 0 + this.d / 2) {
      this.b = -this.b;
    }
  }

  playerCheck() {
    //hvis bolden rammer kanten af player 1 eller player 2, så negeres a-komposanten i retningsvektren (indfaldsvinkel lig udfaldsvinkel)
    if (
      this.x - this.d / 2 <= player1.x + player1.w &&
      this.y - this.d / 2 >= player1.y - 35 &&
      this.y + this.d / 2 <= player1.y + player1.h + 35 &&
      this.x > player1.x + player1.w
    ) {
      this.a = -this.a;
    }

    if (
      this.x + this.d / 2 >= player2.x &&
      this.y - this.d / 2 >= player2.y - 35 &&
      this.y + this.d / 2 <= player2.y + player2.h + 35 &&
      this.x < player2.x
    ) {
      this.a = -this.a;
    }
  }
}
