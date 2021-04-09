var rubberpos;

class Rubber{
	constructor(x,y,r){
	// assign options to the rubber ball
	var options= {
		restitution:0.6,
		friction:5,
		density:1
		}
		this.x=x;
		this.y=y;
		this.radius=r
		this.body=Bodies.circle(this.x, this.y, (this.radius-20)/2, options)
		World.add(world, this.body);

	}
	display(){
			rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("#ffd45c");
			fill("#ffd45c");
			//draw the ellipse here to display the rubber ball
            ellipse(0,0,this.radius , this.radius);
			pop()
	}

}