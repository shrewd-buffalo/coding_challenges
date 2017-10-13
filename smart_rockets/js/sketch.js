var population;
var obstacle;
var popSize = 100;

function setup() {
	// setup code
	createCanvas(400, 500);
	//createCanvas(window.innerWidth - 30, window.innerHeight - 30);

	obstacle = new Obstacle(120, 200, 150, 20);
	target = new Target(width / 2, 50);
	population = new Population(popSize, target, obstacle);
}

function draw() {
	// draw code
	push();
	clear();
	background(0);

	ellipseMode(CENTER);
	fill(255);
	ellipse(width / 2, 50, 10, 10);

	pop();

	this.population.update();
	this.population.render();

	this.obstacle.render();
}

function Target(x, y) {
	this.x = x;
	this.y = y;
}
