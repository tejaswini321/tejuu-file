class Ground{
    constructor(){
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(400,680,800,5,options);
        this.width = 800;
        this.height = 10;

        World.add(world,this.body);
    }
     display(){
        var pos = this.body.position
        rectMode(CENTER);
        fill("yellow");
        rect(pos.x,pos.y,800,10);
 
     }
}