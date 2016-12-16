var Snowflake = function(){

    this.pos = createVector(random(width),random(height))
    this.vel = createVector(0,0)
    this.size = random(4) + 1
    this.maxSpeed = random(2) + 2
    this.noiseOffset = random(100)
    
    this.update = function(){
        var floatAngle = noise((frameCount+this.noiseOffset)/100)*TWO_PI
        float = p5.Vector.fromAngle(floatAngle)
        
        acc = createVector(0,0)
        acc.add(float)
        acc.add(g)

        this.vel.add(acc)
        this.vel.limit(this.maxSpeed)
        this.pos.add(this.vel)

        if(this.pos.y > height){
            addSnow(this.pos.x)
            this.pos = createVector(random(width),-10)
        }
    }

    this.render = function(){
        stroke(255)
        strokeWeight(this.size)
        point(this.pos.x, this.pos.y)
    }
}

function addSnow(arg=false){
    if(!arg){
        for(i in snowLevel){
            snowLevel[i]++
        }
    } else {
        var pos = floor(arg*100/width)
        snowLevel[pos]++
    }
}

function smoothSnow(){
    for(var i = 1; i < snowLevel.length-1; i++){
        var avg = (snowLevel[i-1]+snowLevel[i+1])/2
        if(avg-snowLevel[i] > 7){
            snowLevel[i] += 6
            snowLevel[i-1] -= 3
            snowLevel[i+1] -= 3
        } else if(snowLevel[i]-avg > 7){
            snowLevel[i] -= 6
            snowLevel[i-1] += 3
            snowLevel[i+1] += 3
        }
    }
}