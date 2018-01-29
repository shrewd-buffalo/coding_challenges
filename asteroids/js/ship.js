function Ship()
{
	this.size = 5;
	this.heading = createVector(0,0);
	this.angle = 0;
	this.angle_to_rotate = 0.1;
	this.position = createVector( width / 2,  height / 2 );
	this.velocity = createVector( 0, 0 );
	this.acceleration = createVector( 0, 0 );
	this.projectiles = [];
	this.shouldRotateLeft = false;
	this.shouldRotateRight = false;
	this.thrusting = false;
}

Ship.prototype.render = function()
{
	push();
	noFill();
	stroke( 255 );
	translate(this.position.x - this.size/2, this.position.y - this.size/2);
	rotate(this.velocity.heading() + this.angle);
	triangle(
		0 - this.size, 0 + this.size,
		0 + this.size, 0, 
		0 - this.size, 0 - this.size );
	pop();
}

Ship.prototype.update = function()
{
	// Velocity changes according to acceleration
	this.velocity.add( this.acceleration );
	this.velocity.limit( this.maxspeed );
	
	// position changes by velocity
	this.position.add( this.velocity );
	
	if( this.shouldRotateLeft )
	{
		this.angle -= this.angle_to_rotate;
	}
	else if( this.shouldRotateRight )
	{
		this.angle += this.angle_to_rotate;
	}
	
	if( this.thrusting )
	{
		this.position.x = this.position.x + cos(this.angle);
		this.position.y = this.position.y + sin(this.angle);
	}	
}

Ship.prototype.rotateLeft = function()
{
	this.shouldRotateLeft = true;
}

Ship.prototype.rotateRight = function()
{
	this.shouldRotateRight = true;
}

Ship.prototype.stopRotating = function()
{
	this.shouldRotateLeft = false;
	this.shouldRotateRight = false;
}

Ship.prototype.thrust = function()
{
	this.thrusting = true;
}

Ship.prototype.stopThrust = function()
{
	this.thrusting = false;
}

Ship.prototype.shoot = function()
{
	// create projectiles
	console.lo
}

Ship.prototype.checkEdges = function()
{
	if( (this.position.x - this.size) > width )
	{
		this.position.x = 0;
	} 
	else if(this.position.x + this.size < 0 )
	{
		this.position.x = width;
	}
	
	if( (this.position.y - this.size) > height )
	{
		this.position.y = 0;
	} 
	else if( (this.position.y + this.size) < 0 )
	{
		this.position.y = height;
	}
}


function Projectile()
{
	
}