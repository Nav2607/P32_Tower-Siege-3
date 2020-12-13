  
class Ball{
    constructor(x,y,radius){
        var options={
            friction: 0.4,
            density: 1
        }
        this.radius = radius
        this.x=x;
        this.y=y;
        
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world, this.body);
     }
     display(){
         fill('purple')
        var pos = this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
       ellipse(0,0, this.radius, this.radius);
        pop();
     }
    }