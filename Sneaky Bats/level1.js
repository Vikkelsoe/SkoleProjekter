class Level1 {

    constructor(){
        this.walls = [new Wall(10,10,10,510), new Wall(10,10,810,10), new Wall(10,510,810,510), new Wall(810,10,810,510)]; //de fire walls, der omkranser canvas
        this.rwalls = [];
        this.bats1 = [new Bat1(75, 260)];
        this.bats2 = [];
        this.bear = new Bear(75,100);
        this.goal = new Goal(45,330);

        //øvrige walls
        append(this.walls, new Wall(10,210,550,210));
        append(this.walls, new Wall(10,310,550,310));

    }

    draw(){
        this.bear.draw();
        this.goal.draw();

        for (let i = 0; i < this.bats1.length; i++){
            this.bats1[i].draw();
        }

        for (let i = 0; i < this.walls.length; i++){
            this.walls[i].draw();
        }
    }
}