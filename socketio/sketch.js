/// <reference path="./global.d.ts" />

// socket emit
let socket = io();

// Chat-funktionalitet
$(function() {
  // var socket = io();
  $('form').submit(function() {
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  });
  socket.on('chat message', function(msg) {
    $('#messages').append($('<li>').text(msg));
    window.scrollTo(0, document.body.scrollHeight);
  });
});

// p5.js
class Player {
  constructor(x, y, a, b, speed, radius, color) {
    this.x = x;
    this.y = y;
    this.a = a;
    this.b = b;
    this.speed = speed;
    this.radius = radius;
    this.color = color;
  }

  moveLeft() {
    this.a = -this.speed;
    this.b = 0;
    this.emitPosition();
  }

  moveRight() {
    this.a = this.speed;
    this.b = 0;
    this.emitPosition();
  }

  moveUp() {
    this.b = -this.speed;
    this.a = 0;
    this.emitPosition();
  }

  moveDown() {
    this.b = this.speed;
    this.a = 0;
    this.emitPosition();
  }

  stop() {
    this.a = 0;
    this.b = 0;
    this.emitPosition();
  }


  emitPosition() {
    socket.emit('position', { x: this.x, y: this.y });
  }

  receivePosition() {
    // kaldes 1 og kun 1 gang
    socket.on('position', function(msg) {
      console.log(msg);
    });
  }

  draw() {
    this.x = this.x + this.a;
    this.y = this.y + this.b;

    fill(this.color);
    circle(this.x, this.y, this.radius);
    this.emitPosition();
  }
}

let player;

function setup() {
  createCanvas(800, 800);
  player = new Player(200, 200, 0, 0, 10, 20, 'red');
  player.receivePosition();
}

function draw() {
  background('black');
  player.draw();
}


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    player.moveLeft();
  } else if (keyCode === RIGHT_ARROW) {
    player.moveRight();
  } else if (keyCode === DOWN_ARROW) {
    player.moveDown();
  } else if (keyCode === UP_ARROW) {
    player.moveUp();
  } else if (keyCode === 83) {
    player.stop();
  }

}
