var num_snowflakes = 200
var snowflakes = []

function setup(){
	createCanvas(600,400)

	for(var i = 0; i < num_snowflakes; i++){
		snowflakes.push(new Snowflake())
	}

	g = createVector(0,9.81)
}

function draw(){
	background(51)
	
	for(i in snowflakes){
		snowflakes[i].update()
		snowflakes[i].render()
	}
}