class Bear{

    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    draw(){
        fill("red");
        stroke("black");
        circle(this.x,this.y,50);
    }
}