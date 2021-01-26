let Engine = Matter.Engine;
let Render = Matter.Render;
let World = Matter.World;
let Bodies = Matter.Bodies;
let Body = Matter.Body;
let Composite = Matter.Composite;

let engine;
let bolde = [];
let vægge = [];
let endGame = false;

class Bold {
  constructor(x, y, radius, options) {
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    World.add(engine.world, this.body);
  }

  draw() {
    let pos = this.body.position;
    fill(241, 196, 15);
    circle(pos.x, pos.y, 2 * this.radius);
  }
}

class Kasse {
  constructor(x, y, w, h, farve, options) {
    // let options = { };
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.farve = farve;
    World.add(engine.world, this.body);
  }

  draw() {
    let pos = this.body.position;
    let angle = this.body.angle;
    push();
    fill(this.farve);
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
  }
}

class Væg {
  constructor(x, y, w, h, a) {
    let options = { isStatic: true, angle: a };
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(engine.world, this.body);
  }

  draw() {
    let pos = this.body.position;
    let angle = this.body.angle;
    push();
    fill(88, 214, 141);
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
  }
}

let væg1, væg2, væg3, væg4, væg5, væg6, kasse, bold;

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  væg1 = new Væg(windowWidth / 2, windowHeight - 16, windowWidth - 2, 30, PI);
  væg2 = new Væg(windowWidth / 5, windowHeight / 2, 50, 50, 90);
  væg3 = new Væg((4 * windowWidth) / 5, windowHeight / 2, 50, 50, 90);
  væg4 = new Væg(5, windowHeight / 2, 10, windowHeight, 0);
  væg5 = new Væg(windowWidth - 5, windowHeight / 2, 10, windowHeight, 0);
  væg6 = new Væg(windowWidth / 2, -10, windowWidth, 20, PI);
  vægge.push(væg1, væg2, væg3, væg4, væg5, væg6);

  kasse = new Kasse(windowWidth / 2, windowHeight - 30, 80, 80, "red", {
    inertia: Infinity,
  });

  bold1 = new Bold((2 * windowWidth) / 11, 50, 40, { restitution: 1.45 });
  bold2 = new Bold(windowWidth / 2, 50, 40, { restitution: 1.45 });
  bold3 = new Bold((9 * windowWidth) / 11, 50, 40, {
    restitution: 1.5,
  });
  bolde.push(bold1, bold2, bold3);
}

function draw() {
  background("lightblue");
  Engine.update(engine);
  for (i = 0; i < vægge.length; i++) {
    vægge[i].draw();
  }
  kasse.draw();
  for (i = 0; i < bolde.length; i++) {
    bolde[i].draw();
    let collision = Matter.SAT.collides(kasse.body, bolde[i].body);
    if (collision.collided) {
      endGame = true;
    }
  }

  if (keyIsPressed == true) {
    if (keyCode == 68) {
      Body.applyForce(
        kasse.body,
        { x: kasse.body.position.x, y: kasse.body.position.y },
        { x: 0.02, y: 0 }
      );
    }
    if (keyCode == 65) {
      Body.applyForce(
        kasse.body,
        { x: kasse.body.position.x, y: kasse.body.position.y },
        { x: -0.02, y: 0 }
      );
    }
  }

  if (endGame) {
    background("lightblue");
    fill("red");
    textSize(50);
    text("Game Over", windowWidth / 2 - 150, windowHeight / 2);
    for (i = 0; i < vægge.length; i++) {
      vægge[i].draw();
    }
  }
}
