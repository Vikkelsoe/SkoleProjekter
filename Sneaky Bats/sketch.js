var currentLevel = 1;
var level1;
var level2;
var level3;
var level4;
var restart = false;
let star;

//preloader stjerne-billedet til goal
function preload(){
  star = loadImage("star.png");
}

// danner canvas og de enkelte levels
function setup() {
  createCanvas(820, 520);
  level1 = new Level1();
  level2 = new Level2();
  level3 = new Level3();
  level4 = new Level4();

}

function draw() {
  background(220);

  //hvis spilleren er på level 1
  if (currentLevel == 1){
    level1.draw();
    moveSprites(level1);

    //hvis spilleren rammer goal, så skift til level 2
    if (goalHit(level1) == true){
      currentLevel = 2;
    }

    //undersøger om spilleren er ramt af en bat
    restart = bearBatHit(level1);

    //hvis spilleren er ramt af en bat, så restartes level 1
    if (restart == true){
      level1 = new Level1();
      restart = false;
    }

  }

  //hvis spilleren er på level 2
  else if (currentLevel == 2){
    level2.draw();
    moveSprites(level2);

    if (goalHit(level2) == true){
      currentLevel = 3;
    }

    restart = bearBatHit(level2);

    if (restart == true){
      level2 = new Level2();
      restart = false;
    }

  }

  //hvis spilleren er på level 3
  else if (currentLevel == 3){
    level3.draw();
    moveSprites(level3);

    if (goalHit(level3) == true){
      currentLevel = 4;
    }

    restart = bearBatHit(level3);

    if (restart == true){
      level3 = new Level3();
      restart = false;
    }

  }

  //hvis spilleren er på level 4
  else if (currentLevel == 4){
    level4.draw();
    moveSprites(level4);

    if (goalHit(level4) == true){
      currentLevel = 5;
    }

    restart = bearBatHit(level4);

    if (restart == true){
      level4 = new Level4();
      restart = false;
    }

  }

  //hvis spilleren færdiggør level 5
  else if(currentLevel == 5){
    fill("orange");
    stroke("black");
    textSize(50);
    text("Congratulations! Game over.", 75,260);
  }
  
}

//funktionen, der lader spilleren rykke sin bear
function moveSprites(level){
  //op
  if (keyIsDown(87) || keyIsDown(73)) {
    level.bear.y -= 5; //ryk
    
    //rykker bats1 sammen med bear
    for (let i = 0; i < level.bats1.length; i++){
      level.bats1[i].y -= 5;
      
      //hvis en bat rammer en af de andre, så rykkes den ikke alligevel
      if(batBatHit(level,level.bats1[i]) == true){
        level.bats1[i].y += 5;
      }
    }

    //rykker bats2 sammen med bear
    for (let i = 0; i < level.bats2.length; i++){
      level.bats2[i].y -= 10;
      
      //hvis en bat rammer en af de andre, så rykkes den ikke alligevel
      if(batBatHit(level,level.bats2[i]) == true){
        level.bats2[i].y += 10;
      }
    }

    //hvis bear rammer en mur, så rykkes den ikke alligevel
    if(collideCheckBear(level)){
      level.bear.y += 5;
    }

    //hvis en bat1 rammer en mur, så rykkes den ikke alligevel
    for (let i = 0; i < level.bats1.length; i++){
      if(collideCheckBat(level,level.bats1[i])){
          level.bats1[i].y += 5;
        }
    }

    //hvis en bat2 rammer en mur, så rykkes den ikke alligevel
      for (let i = 0; i < level.bats2.length; i++){
        if(collideCheckBat(level,level.bats2[i])){
            level.bats2[i].y += 10;
          }
      }

  }

  //ned
  if (keyIsDown(83) || keyIsDown(75)) {
    level.bear.y += 5;

    for (let i = 0; i < level.bats1.length; i++){
      level.bats1[i].y += 5;

      if(batBatHit(level,level.bats1[i]) == true){
        level.bats1[i].y -= 5;
      }
    }

    for (let i = 0; i < level.bats2.length; i++){
      level.bats2[i].y += 10;

      if(batBatHit(level,level.bats2[i]) == true){
        level.bats2[i].y -= 10;
      }
    }

    if(collideCheckBear(level)){
      level.bear.y -= 5;
    }

    for (let i = 0; i < level.bats1.length; i++){
      if(collideCheckBat(level,level.bats1[i])){
          level.bats1[i].y -= 5;
        }
    }

    for (let i = 0; i < level.bats2.length; i++){
      if(collideCheckBat(level,level.bats2[i])){
          level.bats2[i].y -= 10;
        }
    }

  }
  
  //højre
  if (keyIsDown(68) || keyIsDown(76)) {
    level.bear.x += 5;

    for (let i = 0; i < level.bats1.length; i++){
      level.bats1[i].x += 5;
      
      if(batBatHit(level,level.bats1[i]) == true){
        level.bats1[i].x -= 5;
      }
    }

    for (let i = 0; i < level.bats2.length; i++){
      level.bats2[i].x += 10;
      
      if(batBatHit(level,level.bats2[i]) == true){
        level.bats2[i].x -= 10;
      }
    }

    if(collideCheckBear(level)){
      level.bear.x -= 5;
    }
    
    for (let i = 0; i < level.bats1.length; i++){
      if(collideCheckBat(level,level.bats1[i])){
          level.bats1[i].x -= 5;
        }
    }

    for (let i = 0; i < level.bats2.length; i++){
      if(collideCheckBat(level,level.bats2[i])){
          level.bats2[i].x -= 10;
        }
    }

  }
  
  //venstre
  if (keyIsDown(65) || keyIsDown(74)) {
    level.bear.x -= 5;

    for (let i = 0; i < level.bats1.length; i++){
      level.bats1[i].x -= 5;

      if(batBatHit(level,level.bats1[i]) == true){
        level.bats1[i].x += 5;
      }
    }

    for (let i = 0; i < level.bats2.length; i++){
      level.bats2[i].x -= 10;

      if(batBatHit(level,level.bats2[i]) == true){
        level.bats2[i].x += 10;
      }
    }

    if(collideCheckBear(level)){
      level.bear.x += 5;
    }

    for (let i = 0; i < level.bats1.length; i++){
      if(collideCheckBat(level,level.bats1[i])){
          level.bats1[i].x += 5;
        }
    }

    for (let i = 0; i < level.bats2.length; i++){
      if(collideCheckBat(level,level.bats2[i])){
          level.bats2[i].x += 10;
        }
    }

  }

}

//funktion, der undersøger om bear rammer om en mur
function collideCheckBear(level) {
  var collisionBear = false;
  
  //for alle mure
  for (let i = 0; i < level.walls.length; i++){
    
    let distanceLine = abs(level.walls[i].a*level.bear.x + level.walls[i].b*level.bear.y + level.walls[i].c)/sqrt((level.walls[i].a)**2+(level.walls[i].b)**2); //vinkelret afstand fra bear til mur
    let distancePoint1 = (((level.walls[i].x1-level.bear.x)**2) + ((level.walls[i].y1-level.bear.y)**2))**0.5; //afstand fra bear til murens begyndelsespunkt
    let distancePoint2 = (((level.walls[i].x2-level.bear.x)**2) + ((level.walls[i].y2-level.bear.y)**2))**0.5; //afstand fra bear til murens endepunkt
    let segmentLen = distancePoint1 + distancePoint2;
    
    //hvis distancen til muren er mindre end eller lig 25 OG segmentlen er mindre end længden af muren (+25) OG bear ikke er tættere end 25 på startpunkt OG bear ikke er tættere end 25 på slutpunkt
    if(distanceLine <= 25 && segmentLen <= (level.walls[i].len+25) && distancePoint1 > 25 && distancePoint2 > 25){
      collisionBear = true;
    } else if (distancePoint1 <= 25 || distancePoint2 <= 25){ //særlig collision tjek, hvis bear er tættere på et af endepunkterne end 25
      collisionBear = true;
    }
    
  }
  return collisionBear;
}

//funktion, der undersøger om en bat rammer en mur (samme princip som collideCheckBear)
function collideCheckBat(level,bat) {
  var collisionBat = false;
  
  //tjekker sorte walls
  for (let i = 0; i < level.walls.length; i++){
    
    let distanceLine = abs(level.walls[i].a*bat.x + level.walls[i].b*bat.y + level.walls[i].c)/sqrt((level.walls[i].a)**2+(level.walls[i].b)**2);
    let distancePoint1 = (((level.walls[i].x1-bat.x)**2) + ((level.walls[i].y1-bat.y)**2))**0.5;
    let distancePoint2 = (((level.walls[i].x2-bat.x)**2) + ((level.walls[i].y2-bat.y)**2))**0.5;
    let segmentLen = distancePoint1 + distancePoint2;
    
    if(distanceLine <= 25 && segmentLen <= (level.walls[i].len+25) && distancePoint1 > 25 && distancePoint2 > 25){
      collisionBat = true;
    } else if (distancePoint1 <= 25 || distancePoint2 <= 25){
      collisionBat = true;
    }

  }

  //tjekker røde rwalls
  for (let i = 0; i < level.rwalls.length; i++){
    
    let distanceLine = abs(level.rwalls[i].a*bat.x + level.rwalls[i].b*bat.y + level.rwalls[i].c)/sqrt((level.rwalls[i].a)**2+(level.rwalls[i].b)**2);
    let distancePoint1 = (((level.rwalls[i].x1-bat.x)**2) + ((level.rwalls[i].y1-bat.y)**2))**0.5;
    let distancePoint2 = (((level.rwalls[i].x2-bat.x)**2) + ((level.rwalls[i].y2-bat.y)**2))**0.5;
    let segmentLen = distancePoint1 + distancePoint2;
    
    if(distanceLine <= 25 && segmentLen <= (level.rwalls[i].len+25) && distancePoint1 > 25 && distancePoint2 > 25){
      collisionBat = true;
    } else if (distancePoint1 <= 25 || distancePoint2 <= 25){
      collisionBat = true;
    }

  }
    
  return collisionBat;
}

//funktion, der undersøger om bear rammer en af batsne
function bearBatHit(level) {
  var hit = false;
  for (let i = 0; i < level.bats1.length; i++){
    let distance = (((level.bear.x-level.bats1[i].x)**2) + ((level.bear.y-level.bats1[i].y)**2))**0.5;

    //hvis distance fra bear til bat1 er mindre end 49, så er hit true
    if(distance <= 49){
      hit = true;
    }
  }

  for (let i = 0; i < level.bats2.length; i++){
    let distance = (((level.bear.x-level.bats2[i].x)**2) + ((level.bear.y-level.bats2[i].y)**2))**0.5;

    //hvis distance fra bear til bat2 er mindre end 49, så er hit true
    if(distance <= 49){
      hit = true;
    }
  }

  return hit;
}

//funktion, der undersøger om en bat rammer en af de andre bats
function batBatHit(level,bat){
  var hit = false;

  for (let j = 0; j < level.bats1.length; j++){
    let distance =  (((bat.x-level.bats1[j].x)**2) + ((bat.y-level.bats1[j].y)**2))**0.5;
    
    //hvis distance mellem bat er mindre end 59 OG større end 0 (afstand til batten selv er selvfølgelig 0, men det skal ikke tælle), så er hit true
    if(distance < 50 && distance > 0){
      hit = true;
    }
  }

  for (let j = 0; j < level.bats2.length; j++){
    let distance =  (((bat.x-level.bats2[j].x)**2) + ((bat.y-level.bats2[j].y)**2))**0.5;
    
    //hvis distance mellem bat er mindre end 59 OG større end 0 (afstand til batten selv er selvfølgelig 0, men det skal ikke tælle), så er hit true
    if(distance < 60 && distance > 0){
      hit = true;
    }
  }

  return hit;
}

//funktion, der undersøger om bear rammer goal
function goalHit(level){
  var hit = false;

  let distance =  (((level.bear.x-(level.goal.x+32))**2) + ((level.bear.y-(level.goal.y+30))**2))**0.5;
  
  //hvis distance mellem bear og goal er mindre end 50, så er hit true
  if(distance <= 50){
    hit = true;
  }

  return hit;
}