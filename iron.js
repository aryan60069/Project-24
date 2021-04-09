var ironPos;

class Iron {
	constructor(x, y, width, height){
		var options={
           restitution:0.8,
		   friction:3,
		   density:30
		}
		this.body = Bodies.rectangle(x,y,width,height,options);
		this.width = width;
		this.height = height;

		World.add(world ,this.body);
	}
	display(){
	    ironPos = this.body.position;
		push();
		translate(ironPos.x,ironPos.y);
		rectMode(CENTER);
		stroke("#a19d94");
		strokeWeight(3);
		fill("#a19d94");
		rect(0,0,this.width, this.height);
		pop();
	}
}