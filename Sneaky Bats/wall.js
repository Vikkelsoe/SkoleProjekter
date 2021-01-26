class Wall {

    constructor(x1,y1,x2,y2){
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.a = -(this.y2 - this.y1); //normalvektorens førstekomposant
        this.b = this.x2 - this.x1; //normalvektorens andenkomposant
        this.c = ((-this.a) * this.x1) - (this.b * this.y1); //konstanten c i en linjes ligning
        this.len = ((this.x2-this.x1)**2 + (this.y2-this.y1)**2)**0.5;
    }

    draw(){
        stroke("black");
        line(this.x1,this.y1,this.x2,this.y2);
    }
}