const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint
var engine, world;
var bob1,bob2,bob3,bob4,bob5,chain1;
var bobdiameter=60;
function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1=new bob(260,450,30);
	bob2=new bob(320,450,30);
	bob3=new bob(380,450,30);
	bob4=new bob(440,450,30);
	bob5=new bob(500,450,30);
    roof1=new Roof(400,200,20,400);
	chain1=new Chain(bob1.body,roof1.body,-bobdiameter*2,0);
	chain2=new Chain(bob2.body,roof1.body,-bobdiameter*1,0);
	chain3=new Chain(bob3.body,roof1.body, bobdiameter*0,0);
	chain4=new Chain(bob4.body,roof1.body, bobdiameter*1,0);
    chain5=new Chain(bob5.body,roof1.body, bobdiameter*2,0);
   
   
    


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(115);
  Engine.update(engine);
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  text('Press Up arrow once to Play',220,205);
  fill('red');

  drawSprites();
 
}

function keyPressed() {
    
    if (keyCode === UP_ARROW ){
	
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-180,y:+180});

    }
}

