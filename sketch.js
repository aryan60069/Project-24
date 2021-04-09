const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var hammer , rubber , iron, stone;

function setup(){
    var canvas = createCanvas(1200,580);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(1000,400,65);
    stone = new Stone(700,400,100,50);
    iron = new Iron(400,400,60,50);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();

    textSize(20);
    text("Iron", ironPos.x-15 , ironPos.y+10);

    textSize(20);
    text("Brick", stonePos.x-20 , stonePos.y+10);

    textSize(15);
    text("Rubber", rubberpos.x-22 , rubberpos.y+6);

    textSize(20);
    text("Hammer", pos.x-30 , pos.y+10);
}