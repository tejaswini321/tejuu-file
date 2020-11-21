
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2, box3;
var ground;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
    
    box1 = new Box(620,665,150,15);
    box2 = new Box(540,625,15,80);
    box3 = new Box(700,625,15,80);
    ball = new Ball(40,670,70);
    ground = new Ground();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER)
  background(255);
  Engine.update(engine);
  ellipseMode(RADIUS);

  box1.display();
  box2.display();
  box3.display();
  ground.display();
  ball.display();
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
     Matter.Body.applyForce(ball.body,ball.body.position,{x:65,y:-65});
  }
}



