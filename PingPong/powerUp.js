class PowerUp {
  constructor() {
    this.d = 40;
    this.x = random(
      windowWidth / 6 + player1.w + this.d,
      (5 * windowWidth) / 6 - this.d
    ); //x-koordinatet for Power-Up'en er et tilfældigt sted mellem de to players
    this.y = random(0, windowHeight); //y-koordinatet for Power-Up'en er tilfældig
    this.type = round(random(5), 0); //Power-Up'ens type er tilfældig (mellem 0 og 4)
    this.active = false;
    this.activationStart = 0;
    this.activationRound = 0;
  }

  //Power-Up'en tegnes på skærmen, hvis den endnu ikke er aktiveres (activationStart er lig 0).
  //Den illustreres med et bestemt ikon (hentet i preload i sketch.js) baseret på dens type
  draw() {
    if (this.activationStart == 0) {
      if (this.type == 0) {
        image(img0, this.x - this.d, this.y - this.d, this.d, this.d);
      } else if (this.type == 1) {
        image(img1, this.x - this.d, this.y - this.d, this.d, this.d);
      } else if (this.type == 2) {
        image(img2, this.x - this.d, this.y - this.d, this.d, this.d);
      } else if (this.type == 3) {
        image(img3, this.x - this.d, this.y - this.d, this.d, this.d);
      } else if (this.type == 4) {
        image(img4, this.x - this.d, this.y - this.d, this.d, this.d);
      }

      this.ballDetection(); //this.ballDetection() køres

    }
  }

  /*hvis afstanden mellem boldens centrum og Power-Up'ens centrum er mindre end eller lig med Power-Up'ens radius + boldens radius
  (+15, da det viser sig at fungere bedst), så aktiveres Power-Up'en, og det gemmes i to variabler ved hvilken frame
  og i hvilken runde den blev aktiveret. Deruover registreres det i alive-variablen, at den ikke længere er 'levende', og dermed ikke skal tegnes*/
  ballDetection() {
    if (
      ((this.x - ball.x) ** 2 + (this.y - ball.y) ** 2) ** 0.5 <= (this.d/2+ball.d/2+15)) {
      this.active = true;
      this.activationStart = frameCount;
      this.activationRound = roundsCount;
    }
  }
}
