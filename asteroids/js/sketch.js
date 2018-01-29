var ship;
var numStartingAsteroids = 10;
var asteroids = [];

function setup()
{
	// setup code
	createCanvas( 640, 480 );
	
	ship = new Ship();
	
	for( var i=0; i<numStartingAsteroids; i++)
	{
		asteroids[i] = new Asteroid( random(0, width), random(0, height), random(20,50), random(5,15) );
	}
	
	// replace with p5 keyPressed
	//addEventListener("keydown", this.handleKeyPress);

	log("Initialised");
}

function keyPressed(evt)
{
	switch( evt.code )
	{
		case "ArrowLeft":
			ship.rotateLeft();
			break;
		case "ArrowRight":
			ship.rotateRight();
			break;
		case "ArrowUp":
			ship.thrust();
			break;
	}
}

function keyReleased( evt ) {
	switch( evt.code )
	{
		case "ArrowLeft":
			ship.stopRotating();
			break;
		case "ArrowRight":
			ship.stopRotating();
			break;
		case "ArrowUp":
			ship.stopThrust();
			break;
	}
}

function draw()
{
	// draw code
	updateScene();
	renderScene();
}

function updateScene()
{
	ship.update();
	
	for( var i=0; i<asteroids.length; i++)
	{
		asteroids[i].update();
	}
}

function renderScene()
{
	clear();
	background(0);
	ship.render();
	
	for( var i=0; i<asteroids.length; i++)
	{
		asteroids[i].render();
	}
	
}
