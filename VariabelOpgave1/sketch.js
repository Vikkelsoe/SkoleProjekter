/// <reference path="./global.d.ts" />


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  
}

function mouseDragged(){
  if(mouseButton == LEFT) {
    fill("red");
    circle(mouseX,mouseY,25);
  }
  if(mouseButton == RIGHT) {
    fill("blue")
    rect(mouseX, mouseY,30, 20);
  }
}