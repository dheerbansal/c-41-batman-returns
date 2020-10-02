var personIMG, drops, thunderIMG, ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
   personIMG = loadAnimation( "walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");
   
    
    thunderIMG = loadImage("1.png")
    thunderIMG2 = loadImage("2.png")
    thunderIMG3 = loadImage("3.png")
    thunderIMG4 = loadImage("4.png");


    }

function setup(){
    createCanvas(1200,800)

    person = createSprite(700,700,50,50);
    person.addAnimation(personIMG);
    person.scale = 0.9
  

    thunder = createSprite(400,50,100,100);
    thunder.addImage(thunderIMG);
    thunder.scale = 0.9;

    ground = createSprite(500,770,1200,25);
    ground.shapeColor = "white";
    ground.scale = 0.9;

    engine=Engine.create();

    world = engine.world;


    
   
    
}

function draw(){
    rectMode(CENTER);
    background("black");
    Engine.update(engine);

 
    drawSprites();
    
}   



