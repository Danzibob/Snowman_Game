//Falling Snow Globals
var num_snowflakes = 200
var snowflakes = []
var snowLevel = []
//Snowball Globals
var rollin = false

function setup(){
	createCanvas(600,400)

	for(var i = 0; i < num_snowflakes; i++){
		snowflakes.push(new Snowflake())
	}
	for(var i = 0; i < 100; i ++){
		snowLevel.push(10)
	}


	g = createVector(0,9.81)
}

function draw(){
	background(51)

	if(frameCount%10 == 0){
		smoothSnow()
	}
	
	for(var i in snowflakes){
		snowflakes[i].update()
		snowflakes[i].render()
	}

	if(rollin){
		rollin.update()
		rollin.render()
	}

	var step = width/100
	beginShape()
	vertex(0,height)
	var last = height-(snowLevel[0])
	for(var i in snowLevel){
		last = lerp(last,(height-snowLevel[i]), 0.2)
		vertex(i*step,last)
	}
	vertex(width,height)
	endShape(CLOSE)
	
}

function mousePressed(){
	if(!rollin){
		rollin = new Ball(mouseX, mouseY)
	}
}