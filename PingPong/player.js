class Player {
  constructor(type) {
    this.type = type;
    this.speed = 10;
    this.h = 150;
    this.w = 15;

    //spilleren placeres til venstre eller højre i skærmen ved hhv. type 1 og type 2
    if (this.type == 1) {
      this.x = windowWidth / 6;
      this.y = windowHeight / 2 - this.h / 2;
    } else if (this.type == 2) {
      this.x = (5 * windowWidth) / 6;
      this.y = windowHeight / 2 - this.h / 2;
    }
  }

  //movePlayer() køres, og playeren tegnes som en grå rektangel
  draw() {
    this.movePlayer();
    fill("grey");
    rect(this.x, this.y, this.w, this.h);
  }

  movePlayer() {
    //player 1 flyttes op og ned (y-koordinaten ændres) med hhv. w og s
    if (this.type == 1) {
      if (keyIsDown(87) && this.y - 10 >= 0) {
        this.y -= this.speed;
      }

      if (keyIsDown(83) && this.y + this.h + 10 <= windowHeight) {
        this.y += this.speed;
      }
    } 
    //player 2 flyttes op og ned (y-koordinaten ændres) med hhv. pil op og pil ned
    else if (this.type == 2) {
      if (keyIsDown(38) && this.y - 10 >= 0) {
        this.y -= this.speed;
      }

      if (keyIsDown(40) && this.y + this.h + 10 <= windowHeight) {
        this.y += this.speed;
      }
    }
  }
}
