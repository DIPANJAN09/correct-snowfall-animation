class Snow {
    constructor(x, y) {
        var options = {
            restitution: 0.5,
            friction: 0,
            density:50
            
        }
        this.r = 10;
        
        this.image = loadImage("snow5.webp");    
        this.body = Bodies.circle(x, y, this.r, options);
            
    World.add(world, this.body); 
            
        
        
        
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("white");
        imageMode(RADIUS);
        
         
        image(this.image,0,0,this.r,this.r);
        pop();

       
    }

};