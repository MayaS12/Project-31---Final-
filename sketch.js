const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var division1, division2, division3, division4, division5, division6, division7;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function preload()
{
	
}

function setup() {
	createCanvas(490, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(245,height,490,20);

	//create divisions
for(var k = 0; k <= 490; k = k+80){
	divisions.push(new Divisions(k,height-divisionHeight/2, 10, divisionHeight));
}
//create plinko row 1
for(var j = 40; j <= 490-40; j=j+50){
	plinkos.push(new Plinko(j,75));
}
//create plinko row 2
for(var m = 40; m <= 490-40; m=m+50){
	plinkos.push(new Plinko(m,175))
}

//create plinko row 3
for(var n = 40; n <= 490-40; n=n+50){
	plinkos.push(new Plinko(n,275))
}

//create plinko row 4
for(var y = 40; y <= 490-40; y=y+50){
	plinkos.push(new Plinko(y,375))
}

	Engine.run(engine);
  
}

function draw() {
  background(0);
  
  ground.display();

  //particle spawn
if(frameCount%60===0){
	particles.push(new Particle(random(490/2-10, 490/2+10),10,10));
}

  //display divisions
for(var k = 0; k < divisions.length; k++){
	divisions[k].display();
}

//display particle
for(var i = 0; i < particles.length; i++){
	particles[i].display();
}

//display plinko row 1
for(var j=0; j < plinkos.length; j++){
	plinkos[j].display();
}

//display plinko row 2
for(var m=0; m < plinkos.length; m++){
	plinkos[m].display();
}

//display plinko row 3
for(var n=0; n < plinkos.length; n++){
	plinkos[n].display();
}

//display plinko row 4
for(var y=0; y < plinkos.length; y++){
	plinkos[y].display();
}

}



