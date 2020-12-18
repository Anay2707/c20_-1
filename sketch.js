var fixedRect, movingRect;

function setup() {
  createCanvas(600,400);

  fixedRect = createSprite(300, 200, 50, 80);
  fixedRect.shapeColor = "orange";

  movingRect = createSprite(400, 200, 80, 50);
  movingRect.shapeColor = "orange";

}

function draw() {
  background("lightblue");  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  console.log(movingRect.x - fixedRect.x);
  console.log(movingRect.width/2 + fixedRect.width/2);

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2) {
    fixedRect.shapeColor = "yellow";
    movingRect.shapeColor = "yellow";
  }
  else{
    fixedRect.shapeColor = "orange";
    movingRect.shapeColor = "orange";
    
  }

  drawSprites();
}
