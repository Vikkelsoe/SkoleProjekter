//programmets variabler deklareres
let player1, player2, ball;
let points1 = 0; //spiller 1's point
let points2 = 0; //spiller 2's point
let winPoint = 7; //der spilles til en af spillerne har point svarende til winPoint (her 7)
let gameStarted = 0;
let roundStarted = 0;
let backDetection = 0;
let countDown = 3; //der tælles ned fra 3 før spillet starter
let powerUps = [];
let currrentA, currentB;
let roundsCount = 0;
let img0, img1, img2, img3, img4;

// preload() kører én gang før setup. Her indlæses de 5 Power-Up-ikoner som png-filer
function preload() {
  img0 = loadImage("PU0.png");
  img1 = loadImage("PU1.png");
  img2 = loadImage("PU2.png");
  img3 = loadImage("PU3.png");
  img4 = loadImage("PU4.png");
}

//setup() danner canvas'et
function setup() {
  createCanvas(windowWidth, windowHeight);
}

//frameraten er på 60 fps, så draw køres 60 gange i sekundet
function draw() {
  
  //hvis spiller 1 eller 2 har fået point lig med winPoint, så køres winScreen()
  if (points1 == winPoint || points2 == winPoint) {
    winScreen();
  }
  //ellers, hvis spillet eller runden ikke er startet endnu
  else if (gameStarted == 0 || roundStarted == 0) {
    background("white");
    newBall(); //kører newBall()
    fill("black");

    //skriver nedtællingen og pointstillingen på skærmen
    textSize(100);
    text(countDown, windowWidth / 2 - 30, windowHeight / 3);
    textSize(75);
    text(points1, windowWidth / 6 - 10, (7 * windowHeight) / 8);
    text("-", windowWidth / 2, (7 * windowHeight) / 8);
    text(points2, (5 * windowWidth) / 6 - 10, (7 * windowHeight) / 8);
    

    timer(); //kører timer()
 
    //hvis nedtællingen er afsluttet, så sættes følgende variabler til 1, hvilket betyder spillet og runden er startet
    if (countDown == 0) {
      gameStarted = 1;
      roundStarted = 1;
    }
  }
  // ellers, så kør runGame()
  else {
    runGame();
  }
}

function newBall() {
  //der dannes nye players og en ny bold. Herefter tegnes de på skærmen.
  player1 = new Player(1);
  player2 = new Player(2);
  ball = new Ball();
  ball.draw();
  player1.draw();
  player2.draw();
}

function timer() {
  /*hvis:
  frameCount'en er delelig med 60 (dvs. én gang i sekundet, såfremt funktionen køres i draw()), og
  nedtællingen stadig er igang (den har ikke ramt 0 endnu), så
  trækkes der én fra countDown */
  if (frameCount % 60 == 0 && countDown > 0) {
    countDown--;
  }
}

function runGame() {
  //bold og spillere tegnes på en hvid baggrund
  background("white");
  player1.draw();
  player2.draw();
  ball.draw();

  //tjekker, om boldens backDetection variabel er aktiveret (lig med 1)
  if (ball.backDetection == 1) {
    //runden sættes til at være aflsuttet (lig med 0) og runde-tæller-variablen øges med 1
    roundStarted = 0;
    roundsCount += 1;

    //undersøger hvilken side af banen bolden befinder sig på, og giver point til spilleren på den modsatte side
    if (ball.x > windowWidth / 2) {
      points1 += 1;
    } else {
      points2 += 1;
    }

    //boldens backDetection variabel sættes inaktiv (lig med 0), og nedtællingen sættes til 3
    ball.backDetection = 0;
    countDown = 3;
  }

  //hvis en spiller har fået point lig med winPoint, så sættes nedtællingen til 5 (tiden winScreen vises i)
  if (points1 == winPoint || points2 == winPoint) {
    countDown = 5;
  }

  //hver 300. frame, dvs. hvert 5. sekund genereres en ny Power-Up som tilføjes powerUp-listen
  if (frameCount % 300 == 0) {
    powerUps.push(new PowerUp());
  }

  //for hvert heltal, i, i ranged fra 0 til powerUps-listens længde:
  for (let i = 0; i < powerUps.length; i++) {
    //Power-Up'ens draw() køres
    powerUps[i].draw();

    //hvis Power-Up i er aktiveret (dens active variabel er true)
    if ( powerUps[i].active) {
      if (powerUps[i].type == 0) {
        //hvis Power-Up i er af type 0, så sættes dens diameter til 40
        ball.d = 40;
      } else if (powerUps[i].type == 1) {
        //hvis Power-Up i er af type 1, så byttes der om på dens a- og b-komposanter i retningsvektoren
        currentA = ball.a;
        currentB = ball.b;
        ball.a = currentB;
        ball.b = currentA;
      } else if (powerUps[i].type == 2) {
        //hvis Power-Up i er af type 2, så sættes hastigheden op med 50% (a- og b-komposanterne i retningsvektoren multipliceres med 1,5)
        ball.a = 1.5 * ball.a;
        ball.b = 1.5 * ball.b;
      } else if (powerUps[i].type == 3) {
        //hvis Power-Up i er af type 3, så sættes spillernes højde til at være lig med 75 (normalt er de 150)
        player1.h = 75;
        player2.h = 75;
      } else if (powerUps[i].type == 4) {
        //hvis power-Up i er af type 4, så sættes spillernes hastigheder ned med 50%
        player1.speed = 0.5 * player1.speed;
        player2.speed = 0.5 * player2.speed;
      }

      powerUps[i].active = false; //Power-Up i sættes inaktiv (dens active variabel sættes til false)

    }

    /*hvis:
    der er gået 300 frames (5 sekunder) fra Power-Up i blev aktiveret, og
    spillerne stadig er i den samme runde, som da den blev aktiveret, så
    sættes tilstanden tilbage til normal alt efter hvilken type power-Up der er tale om
    (type 1 ændres dog ikke tilbage) */
    if (
      frameCount - powerUps[i].activationStart == 300 &&
      powerUps[i].activationRound == roundsCount
    ) {
      if (powerUps[i].type == 0) {
        ball.d = 20;
      } else if (powerUps[i].type == 2) {
        ball.a = ball.a / 1.5;
        ball.b = ball.b / 1.5;
      } else if (powerUps[i].type == 3) {
        player1.h = 150;
        player2.h = 150;
      } else if (powerUps[i].type == 4) {
        player1.speed = 2 * player1.speed;
        player2.speed = 2 * player2.speed;
      }
    }
  }
}

function winScreen() {
  //canvas ryddes med en hvid baggrund
  background("white");

  //hvis nedtællingen stadig kører
  if (countDown > 0) {
    //hvis player 1 er vinder, så skriv det på skærmen. Ellers, så skriv player 2 er vinder.
    if (points1 == winPoint) {
      textSize(75);
      text("Player 1 wins!", windowWidth / 3, windowHeight / 3);
    } else {
      textSize(75);
      text("Player 2 wins!", windowWidth / 3, windowHeight / 3);
    }

    //skriv slutresultatet på skærmen
    text(points1, windowWidth / 6 - 10, (7 * windowHeight) / 8);
    text("-", windowWidth / 2, (7 * windowHeight) / 8);
    text(points2, (5 * windowWidth) / 6 - 10, (7 * windowHeight) / 8);
  }

  //kører timer() (trækker en fra countDown én gang i sekundet)
  timer();

  //hvis nedtællingen er slut, så restartes spillet, pointene, genererede Power-Ups, og nedtællingen sættes til 3 igen
  if (countDown == 0) {
    gameStarted = 0;
    points1 = 0;
    points2 = 0;
    powerUps = [];
    countDown = 3;
  }
}