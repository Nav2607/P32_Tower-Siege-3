var engine, world;
var ground1,ground2;
var ball,slingshot;
var block1,block2,block3,block4,block5;
var block6,block7,block8,block9;
var block10,block11,block12;
var block13,block14,block15;
var block16,block17,block18,block19,block20,block21;
var Score = 0
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
    ground1=new Ground(390,300,250,10);
    ground2=new Ground(700,200,200,10);
    ball= new Ball(50,100,20);
    slingshot=new Slingshot(ball.body,{x:50,y:100});

    block1 = new Block(300,275,30,40);
    block2 = new Block(330,275,30,40);
    block3 = new Block(360,275,30,40);
    block4 = new Block(390,275,30,40);
    block5 = new Block(420,275,30,40);
    block6 = new Block(450,275,30,40);
    block7 = new Block(480,275,30,40);
    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);
    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);
    block16 = new Block(390,155,30,40);
    block17 = new Block(640,175,30,40);
    block18 = new Block(670,175,30,40);
    block19 = new Block(700,175,30,40);
    block20 = new Block(730,175,30,40);
    block21 = new Block(760,175,30,40);
    block22 = new Block(670,135,30,40);
    block23 = new Block(700,135,30,40);
    block24 = new Block(730,135,30,40);
    block25 = new Block(700,95,30,40);

}

function draw() {
  background('white')
  Engine.update(engine);
ground1.display();
ground2.display();
ball.display();
slingshot.display();
fill('red')
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
fill('green')
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
fill('blue')
block13.display();
block14.display();
block15.display();
fill('yellow')
block16.display();
fill('green')
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
fill('blue')
block22.display();
block23.display();
block24.display();
fill('yellow')
block25.display();
fill('black')
text("Score:"+Score,750,40 )
block1.Score();
block2.Score();
block3.Score();
block4.Score();
block5.Score();
block6.Score();
block7.Score();
block8.Score();
block9.Score();
block10.Score();
block11.Score();
block12.Score();
block13.Score();
block14.Score();
block15.Score();
block16.Score();
block17.Score();
block18.Score();
block19.Score();
block20.Score();
block21.Score();
block22.Score();
block23.Score();
block24.Score();
block25.Score();


}   

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
   if (keyCode === 32){
       slingshot.attach(ball.body)
   }
  }

  async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
       background("white");
    }
    else{
        background('black');
    }
  }