var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
	console.log(packageSprite);

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	dustbin1 = new Dustbin(540,560,20,200);
	dustbin2 = new Dustbin(300,560,20,200);
	dustbin3 = new Dustbin(420,650,260,20);
	Engine.run(engine);
}

function draw() {


  rectMode(CENTER);
  background(0);
  text(mouseX+","+mouseY,50,50);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  packageSprite.velocityY=packageSprite.velocityY+1.5;
  drawSprites();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	packageSprite.x=packageBody.position.x;
	packageSprite.y=packageBody.position.y;
	Matter.Body.setStatic(packageBody,false);
  }
}



