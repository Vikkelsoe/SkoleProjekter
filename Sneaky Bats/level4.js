class Level4 {

    constructor(){
        this.walls = [new Wall(10,10,10,510), new Wall(10,10,810,10), new Wall(10,510,810,510), new Wall(810,10,810,510)]; //de fire walls, der omkranser canvas
        this.rwalls = [];
        this.bats1 = [new Bat1(350, 50), new Bat1(50,150), new Bat1(150,150)];
        this.bats2 = [new Bat2(240, 200), new Bat2(330, 360),new Bat2(530, 360)];
        this.bear = new Bear(75,50);
        this.goal = new Goal(730,10);

        //øvrige walls
        append(this.walls, new Wall(10,110,200,110));
        append(this.walls, new Wall(200,110,300,210));
        append(this.walls, new Wall(250,10,350,110));
        append(this.walls, new Wall(300,210,600,210));
        append(this.walls, new Wall(350,110,600,110));
        append(this.walls, new Wall(700,10,700,420));
        append(this.walls, new Wall(200,320,700,320));
        append(this.walls, new Wall(200,110,200,230));
        append(this.walls, new Wall(200,320,100,400));
        append(this.walls, new Wall(430,320,430,420));
        
        append(this.rwalls, new Rwall(200,230,200,320));
        append(this.rwalls, new Rwall(100,400,100,510));
        append(this.rwalls, new Rwall(700,420,700,510));

    }

    draw(){
        this.bear.draw();
        this.goal.draw();
        
        for (let i = 0; i < this.bats1.length; i++){
            this.bats1[i].draw();
        }

        for (let i = 0; i < this.bats2.length; i++){
            this.bats2[i].draw();
        }

        for (let i = 0; i < this.walls.length; i++){
            this.walls[i].draw();
        }

        for (let i = 0; i < this.rwalls.length; i++){
            this.rwalls[i].draw();
        }
    }
}