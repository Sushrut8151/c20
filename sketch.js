var movRect , fixRect

function setup() {
  createCanvas(800,400);
 var movRect =  createSprite(200, 50, 40, 80);
 movRect.shapeColor = "green";
 var fixRect =  createSprite (200, 100, 80,40);
 fixRect.shapeColor = "red";

}

function draw() {
  background("white"); 
  movRect.x = World.mouseX;
   movRect.y = World.mouseY; 
   console.log(movRect.x-fixRect.x); 
   //collision 
   if(movRect.x-fixRect.x < (fixRect.width/2+movRect.width/2) && fixRect.x-movRect.x < (fixRect.width/2+movRect.width/2) && movRect.y-fixRect.y < (fixRect.height/2+movRect.height/2) && fixRect.y-movRect.y < (fixRect.height/2+movRect.height/2)) 
   { fixRect.shapeColor = "yellow"; movRect.shapeColor = "purple"; } 
   else
   { fixRect.shapeColor = "green"; movRect.shapeColor = "red"; }
  drawSprites();
}