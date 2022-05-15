
var trex ,trex_running;
var trexImg, ground, groundImg;

function preload(){
  trexImg= loadAnimation("trex1.png", "trex3.png", "trex4.png")
groundImg= loadImage("ground2.png");
}

function setup(){
  createCanvas(1200,600)
//create a trex sprite
 trex = createSprite(50, 450, 50, 50)
 trex.addAnimation("trex16", trexImg)
 trex.scale=0.5;

 ground = createSprite(45, 475, 50, 20 )
 ground.addAnimation("ground10", groundImg)

 edges=createEdgeSprites()
}

function draw(){
  background("grey")
  
  if(keyDown("space"))  {
    trex.velocityY=-10;
  }

  trex.velocityY=trex.velocityY+0.5; 
  trex.collide(ground);
  drawSprites();

}
