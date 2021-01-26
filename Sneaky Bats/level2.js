class Level2 {

    constructor(){
        this.walls = [new Wall(10,10,10,510), new Wall(10,10,810,10), new Wall(10,510,810,510), new Wall(810,10,810,510)]; //de fire walls, der omkranser canvas
        this.rwalls = [];
        this.bats1 = [new Bat1(300, 50),new Bat1(500, 50),new Bat1(700, 50)];
        this.bats2 = [];
        this.bear = new Bear(75,50);
        this.goal = new Goal(730,450);

        //øvrige walls
        append(this.walls, new Wall(150,10,150,360));
        append(this.walls, new Wall(150,360,550,360));
        append(this.walls, new Wall(700,510,700,100));
        append(this.walls, new Wall(400,100,700,100));
        append(this.walls, new Wall(400,225,700,225));
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