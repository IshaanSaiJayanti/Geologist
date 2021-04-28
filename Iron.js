class Iron{
	constructor(x,y){

		var options={
			'restitution': 0.8,
			'friction':3,
			'density':30

        }
		this.body = Bodies.rectangle(x,y,80,50, options)
		this.width = 80;
		this.height = 50;
		World.add(world, this.body)
	}
	display(){
	var Ironpos=this.body.position;		
			push()
			translate(Ironpos.x, Ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("red");
			fill("black");
			rect(0,0, this.width, this.height);
			pop()
	}

}