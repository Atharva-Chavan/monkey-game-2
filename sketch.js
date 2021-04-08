
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var score
var ground
var bananaGroup,obstaclesGroup
var gameState = PLAY;
var PLAY = 1
var END = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
   createCanvas(600, 200);
 ground = createSprite(200,180,400,20);
 ground.x = ground.width /2;
  obstaclesGroup = createGroup();
  bananaGroup = createGroup();
  monkey = createSprite(35,150,50,50)
  monkey.addAnimation(monkey_running)
}



function draw() {
background(250);
  if(gameState === PLAY){
    
    ground.velocityX = -4;
    
   
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    
    if(keyDown("space")&& monkey.y >=100) {
        monkey.velocityY = -13;
    }
    
   
    trex.velocityY = trex.velocityY + 0.8
  
    banana();
  
    
    obstacles();
    
    if(obstaclesGroup.isTouching(monkey)){
        gameState = END;
    }
  }
   else if (gameState === END) {
      ground.velocityX = 0;
     
      
     
     
           
      monkey.velocityY = 0
     
      obstaclesGroup.setLifetimeEach(-1);
     
      bananaGroup.setLifetimeEach(-1);
     
    
     
     obstaclesGroup.setVelocityXEach(0);
     bananaGroup.setVelocityXEach(0);
   }
drawSprites();
}

function obstacles(){
   if (frameCount % 60 === 0){
     
    var obstacle = createSprite(400,105,10,40);
      obstacle.x = Math.round(random(1,6))
     obstacle.addImage(obstacleImage)
   obstacle.velocityX = -6;
   obstacleGroup.add(obstacle)
   }
}

function banana(){
if (frameCount % 60 === 0){
     
    var banana = createSprite(400,130,10,40);
      banana.x = Math.round(random(1,6))
      banana.addImage(obstacleImage)
      banana.velocityX = -6;
      bananaGroup.add(banana)
  }
}







