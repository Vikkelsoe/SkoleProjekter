function setup() {
  createCanvas(windowWidth,400);
}

function draw() {

  fill(0,0,0);
  beginShape();
    vertex(200, 100);
    vertex(200, 200);
    vertex(300, 150);
  endShape(CLOSE);

  fill(255, 182, 18);
  beginShape();
    vertex(200, 90);
    vertex(320, 150);
    vertex(200, 210);
    vertex(200, 200);
    vertex(300, 150);
    vertex(200, 100);
  endShape(CLOSE);

  fill(0, 122, 77);
  beginShape();
    vertex(200, 90);
    vertex(200, 70);
    vertex(235, 70);
    vertex(340, 130);
    vertex(480, 130);
    vertex(480, 170);
    vertex(340, 170);
    vertex(235, 230);
    vertex(200, 230);
    vertex(200, 210);
    vertex(320, 150);
  endShape(CLOSE);

  fill(255,255,255);
  beginShape();
    vertex(235, 70);
    vertex(260, 70);
    vertex(340, 115);
    vertex(480, 115);
    vertex(480, 130);
    vertex(340, 130);
  endShape(CLOSE);

  fill(255,255,255);
  beginShape();
    vertex(235, 230);
    vertex(340, 170);
    vertex(480, 170);
    vertex(480, 185);
    vertex(340, 185);
    vertex(260, 230);
  endShape(CLOSE);

  fill(222, 56, 49);
  beginShape();
    vertex(260, 70);
    vertex(480,70);
    vertex(480, 115);
    vertex(340, 115);
  endShape(CLOSE);

  fill(0, 35, 149);
  beginShape();
    vertex(260, 230);
    vertex(340, 185);
    vertex(480, 185);
    vertex(480, 230);
  endShape(CLOSE);

}