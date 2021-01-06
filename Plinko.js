class Plinko {
        constructor(x,y){
            var options = {
                isStatic: true,
                density: 1.0
            }
    
            this.x = x;
            this.y = y;
    
            this.body = Bodies.circle(this.x,this.y,10,options);
    
            World.add(world, this.body);
        }
    
        display(){
            var pos =this.body.position;
    
            fill("white");
           ellipseMode(CENTER);
            ellipse(pos.x, pos.y, 10, 10);
    
        }
    }
