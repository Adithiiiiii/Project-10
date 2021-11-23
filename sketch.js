var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(25,78,20,20);
}

function draw() 
{
  if(keyIsDown(LEFT_ARROW)){
    box.position.x = box.position.x -2;
  }
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x = box.position.x +2;
  }
  if(keyIsDown(UP_ARROW)){
    box.position.y = box.position.y -2;
  }
  if(keyIsDown(DOWN_ARROW)){
    box.position.y = box.position.y +2;
  }
  background(30);
  drawSprites();
}




