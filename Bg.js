class Bg{
    constructor(){
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(640,300,1280,600,options);
        this.x=640;
        this.y=300;
        this.width=1280;
        this.height=600;
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,1280,600);


    }
}