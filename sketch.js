
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1 = new bob(300, 600, 40);
bob2 = new bob(350, 600, 40);
bob3 = new bob(400, 600, 40);
bob4 = new bob(450, 600, 40);
bob5 = new bob(500, 600, 40);
roof1 = new roof(400, 300, 250, 40)
rope1= new rope(bob1, roof1, offsetX=300, offsetY=600)
rope2= new rope(bob2, roof1, offsetX=350, offsetY=600)
rope3= new rope(bob3, roof1, offsetX=400, offsetY=600)
rope4= new rope(bob4, roof1, offsetX=450, offsetY=600)
rope5= new rope(bob5, roof1, offsetX=500, offsetY=600)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  rope2.display();  
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



