const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var hammer;
var rock;
var bigRock;
var rubber;
var littleStone;

function setup() {
	var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
	    hammer=new Hammer(200,200,100,30);
	ground=new Ground(600,height,1200,20);
	rock=new Rock(250,300,50,50);
	bigRock=new Rock(1005,100,170,175);
	rubber=new Rubber(1010,10,100,100);
	littleStone=new Rock(450,300,15,15);
}

function draw() {
	background("skyblue");
    Engine.update(engine);
  ground.display();
  hammer.display();
  rock.display();
  bigRock.display();
  rubber.display();
  littleStone.display();
}

