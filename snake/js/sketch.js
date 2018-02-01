var startingLength = 4;

var snake;

var x = 10;
var y = 10;

function setup() {
	// setup code
	createCanvas(600, 600);
	snake = new Snake(300, 300, startingLength);
}

function draw() {
	background(51);

    addWalls();
	// draw code
	snake.render();
	x = x + 10;
	y = y + 0;
	snake.update(x, y);
}

function addWalls()
{
}