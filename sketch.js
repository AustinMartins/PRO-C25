
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,paperimage;
var engine, world;

var side1,dustbinimage;
var ground1;

function preload() {
	backgroundImg = loadImage("download.jpg");
	
	
}


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground1 = new ground(400,700,800,10);
	paper1 = new Paper(100,600,10);
	side1 = new dustbin(700,600,200,200);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  Engine.update(engine);

  ground1.display();

  paper1.display();

  side1.display();
 
  keypressed();

  drawSprites();
 
}

function keypressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:0.2,y:-1.2})
	}
}
