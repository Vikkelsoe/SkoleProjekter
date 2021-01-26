class Bat2{

    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    draw(){
        fill("blue");
        stroke("black");
        circle(this.x,this.y,50);
    }
}