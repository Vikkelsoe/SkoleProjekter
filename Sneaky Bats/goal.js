class Goal{

    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    draw(){
        image(star,this.x,this.y,64,60); //star-billedet, der blev preloadet i sketch
    }
}