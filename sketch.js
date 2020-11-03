var bg,bgImage;
var Score;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  bgImage=loadImage("jungle.jpg");
 
}



function setup() {
  createCanvas(600, 300);
  bg = createSprite(300,100);  
  bg.addImage("jungle.jpg",bgImage);
  bg.scale=1
  monkey = createSprite(80, 250, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  banana = createSprite(150,100);  
  banana.addImage("banana.png",bananaImage);
  banana.scale=0.1
  Score=0
  

  
}


function draw() {
  background("black");
      
  text("Score",Score,500,50)
  stroke("black");
  textSize(20);
  fill("black");
  
  
  bg.velocityX=-7
  banana.velocityX=-7
   
 if (bg.x < 0){
      bg.x = bg.width/2;
    }
  
  

  
  

  
  drawSprites();

}

  
  








