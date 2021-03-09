var roof, string1, bob1, bob2, bob3, bob4, bob5
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(350,100,300,30);
	World.add(world, roof);

	bob1 = new Bob(250, 300);
	bob2 = new Bob(300, 300);
	bob3 = new Bob(350, 300);
	bob4 = new Bob(400, 300);
	bob5 = new Bob(450, 300);

	string1 = new String(bob1.body,roof.body,-100,0);
	World.add(world, string1);

	string2 = new String(bob2.body,roof.body,-50,0);
	World.add(world, string2);

	string3 = new String(bob3.body,roof.body,0,0);
	World.add(world, string3);

	string4 = new String(bob4.body,roof.body,50,0);
	World.add(world, string4);

	string5 = new String(bob5.body,roof.body,100,0);
	World.add(world, string5);

	Engine.run(engine);
  
}


function draw() {

  background("white");

  Engine.update(engine);

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
 
}

function keyPressed(){

if (keyCode === 32){
Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-730,y:0});

}

}



