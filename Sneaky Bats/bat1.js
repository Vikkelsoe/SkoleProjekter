class Bat1{

    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    draw(){
        fill("black");
        stroke("black");
        circle(this.x,this.y,50);
    }
}