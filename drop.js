class Drop{
    constructor(x,y,radius){
        var options={
            isStatic:true,
            restitution:0.1,

        }
        this.x = x
        this.y = y
        this.radius = radius
        this.body = Bodies.circle(this.x,this.y,this.radius,this.radius,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
       push();
        translate(pos.x,pos.y);
        rectMode(CENTER)
        strokeWeight(3)
        fill("purple")
        ellipse( this.x, this.y, this.radius,this.radius);
        pop();
    }
}