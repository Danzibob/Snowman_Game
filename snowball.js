var Ball = function(x,y,size=10){
    this.pos = createVector(x,y)
    this.size = size

    this.render = function(border=true){
        if(border){
            stroke(0)
        } else {
            noStroke()
        }
        fill(255)
        ellipse(this.pos.x, this.pos.y, this.size, this.size)
    }

    this.update = function(){
        newX = lerp(this.pos.x, mouseX, 0.02)
        this.pos = createVector(newX, height-(this.size/2))
        
        var p = []
        for(var i = this.pos.x-this.size/3; i < this.pos.x+this.size/3; i += width/100){
            var pos = floor(i*100/width)
            if(snowLevel[pos] > 2){
                this.size += 20/(this.size*this.size)
                snowLevel[pos] -= 0.2
            }
            
            p.push(pos)
        }
        stroke(255,0,0)
        line(p[0]*width/100,height-2,p[-1]*width/100,height-2)
    }
}
