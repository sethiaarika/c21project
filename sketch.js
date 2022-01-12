const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, groundObj, leftside, rightside;
var world;
var radius=40;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 var ball_options={
	 isStatic:false,
	 resitution:0.3,
	 friction:0,
	 density:1.2,

 }
ball=Bodies.circle(260,100,radius/2,ball_options);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



