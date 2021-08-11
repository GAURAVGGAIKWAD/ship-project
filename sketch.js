var ship;
function preload(){
ship_running = loadAnimation("ship-1.png","ship-2.png","ship3-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  ship = createSprite(90,310,30,30);
  
}

function draw() {
  background("blue");
 
}