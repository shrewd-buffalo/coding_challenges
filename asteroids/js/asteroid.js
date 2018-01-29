function Asteroid(x, y, radius, npoints)
{
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.npoints = npoints;	
	this.position = createVector(x, y);
	this.velocity = p5.Vector.random2D();
	this.maxspeed = 2;
	this.acceleration = p5.Vector.random2D();
	this.offsets = [];

	for( var p = 0; p < npoints; p++)
	{
		this.offsets[p] = {};
		this.offsetX = x * 0.1;
		this.offsetY = y * 0.1;
		this.offsets[p].x = random( this.offsetX );
		this.offsets[p].y = random( this.offsetY );
	}
}

Asteroid.prototype.update = function()
{
	// Velocity changes according to acceleration
	this.velocity.add(this.acceleration);
	this.velocity.limit(this.maxspeed);
	
	// position changes by velocity
	this.position.add(this.velocity);
}

Asteroid.prototype.render = function()
{
	noFill();
	stroke(255);
	this.checkEdges();
	this.polygon(this.position.x, this.position.y, this.radius, this.npoints);
}
	
Asteroid.prototype.polygon = function(x, y, radius, npoints)
{
	var angle = TWO_PI / npoints;
	beginShape();
	var c = 0;
	for (var a = 0; a < TWO_PI; a += angle) 
	{
		var sx = x + ( cos(a) * ( radius + this.offsets[c].x ) );
		var sy = y + ( sin(a) * ( radius + this.offsets[c].y ) );
		
		//vertex(sx, sy);
		//console.log("c["+c+"]");
		vertex(sx, sy);
		c++;
	}
	endShape(CLOSE);
}
	
Asteroid.prototype.checkEdges = function()
{
	if( (this.position.x - this.radius) > width )
	{
		this.position.x = 0;
	} 
	else if(this.position.x + this.radius < 0 )
	{
		this.position.x = width;
	}
	
	if( (this.position.y - this.radius) > height )
	{
		this.position.y = 0;
	} 
	else if( (this.position.y + this.radius) < 0 )
	{
		this.position.y = height;
	}
}