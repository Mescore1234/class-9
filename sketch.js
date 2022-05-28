var block
function setup() {
  createCanvas(600,600);
 block=createSprite(300,300,50,10)
}

function draw() 
{
  background(30);
  if(keyDown(LEFT_ARROW)){
    block.x-=5
  }
  if(keyDown(RIGHT_ARROW)){

    block.x+=5
  }
  if(keyDown(UP_ARROW)){
    block.y-=5
  }
  if(keyDown(DOWN_ARROW)){
    block.y+=5
  }
drawSprites()
}




