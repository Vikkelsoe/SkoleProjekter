class Level3 {

    constructor(){
        this.walls = [new Wall(10,10,10,510), new Wall(10,10,810,10), new Wall(10,510,810,510), new Wall(810,10,810,510)]; //de fire walls, der omkranser canvas
        this.rwalls = [];
        this.bats1 = [];
        this.bats2 = [new Bat2(300, 50),new Bat2(500, 50)];
        this.bear = new Bear(75,50);
        this.goal = new Goal(730,450);

        //øvrige walls

    }

    draw(){
        this.bear.draw();
        this.goal.draw();

        for (let i = 0; i < this.bats2.length; i++){
            this.bats2[i].draw();
        }

        for (let i = 0; i < this.walls.length; i++){
            this.walls[i].draw();
        }
    }
}