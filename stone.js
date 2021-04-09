var stonePos;

class Stone {
    constructor(x, y, width, height){
        var options={
            restitution:0.8,
            friction:0.9,
            density:12
        }
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    display(){
        stonePos = this.body.position;
        push();
        translate(stonePos.x, stonePos.y);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("#cb4154");
        fill("#cb4154");
        rect(0,0,this.width, this.height);
        pop();
    }
}