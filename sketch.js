var ground,monkey,bg,bananaGroup,obstaclesGroup,score;
var bananaImage,stoneImage,bgImage;

function preload(){
monkey_running=loadAnimation("Monkey_01.png",            "Monkey_02.png","Monkey_03.png","Monkey_04.png",     "Monkey_05.png","Monkey_06.png","Monkey_07.png",           "Monkey_08.png","Monkey_09.png","Monkey_10.png")
bananaImage=loadImage("banana.png");
  stoneImage=loadImage("stone.png");
  bgImage=loadImage("jungle.jpg");

}

function setup(){
  createCanvas(800,400);
  
ground =createSprite(400,350,800,10);
ground.velocityX=-4;
ground.x=ground.width/2;
 ground.visible=false; 

bg=createSprite(0,0,800,400);
bg.addImage(bgImage);
bg.velocityX=-4;
bg.scale=1.5;
bg.x=bg.width/2;
  
  
monkey=createSprite(100,340,20,50);
monkey.addAnimation("running",monkey_running);
monkey.scale=0.15;


bananaGroup =new Group();
obstacleGroup =new Group();
  
score=0;
  
}

function draw(){
    background(255);
  
 if (ground.x<0){
  ground.x=ground.width/2; 
 }
 
   if (bg.x<100){
  bg.x=bg.width/2; 
 }
  
  if (bananaGroup.isTouching(monkey)){
     bananaGroup.destroyEach();
  score=score+2;  
}
switch(score){
  case 10: monkey.scale=0.12;
    break;
     case 20: monkey.scale=0.14;
    break;
     case 30: monkey.scale=0.16;
    break;
     case 40: monkey.scale=0.18;
    break;
    default:
    break;
}

 if(keyDown("space")){
      monkey.velocityY = -12 ;
    }
 
 monkey.velocityY = monkey.velocityY + 0.8;
 monkey.collide(ground);
 

bananas();
obstacles();
if(obstacleGroup.isTouching(monkey)){
 monkey.scale=0.08; 
}
 
 

 drawSprites();

text("score= "+score,500,50);
  

}
  
  function bananas(){
 if (frameCount%80==0) {
  var rand=Math.round(random(120,200));
var banana=createSprite(600,rand,40,10);
  banana.addImage(bananaImage);
  banana.scale=0.05;
  banana.velocityX=-3;
  banana.lifetime=215;
  bananaGroup.add(banana);
  monkey.depth=banana.depth+1;
  }
   
  
}
function obstacles(){
 if (frameCount%300==0) {
var obstacle=createSprite(800,350,10,40);
obstacle.addImage(stoneImage);
obstacle.scale=0.25;
obstacle.velocityX=-6;
obstacle.lifetime=215;
obstacleGroup.add(obstacle);
  }
}



