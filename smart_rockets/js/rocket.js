function Rocket(x, y, dna) {
	this.position = createVector(x, y);
	this.velocity = createVector(0);
	this.acceleration = createVector(0);
	this.maxSpeed = 3;
	this.maxForce = 0.9;

	this.width = 8;
	this.height = 20;
	this.dna = dna;

	this.render = function () {
		push();
		noStroke();
		fill(255);

		translate(this.position.x, this.position.y);
		rotate(this.velocity.heading());
		rectMode(CENTER);
		rect(0, 0, this.height, this.width);

		pop();
	}

	this.update = function (age) {

		if (this.completed) {
			return;
		}
		this.applyForce(this.dna.genes[age]);

		// Velocity changes according to acceleration
		this.velocity.add(this.acceleration);

		// position changes by velocity
		this.position.add(this.velocity);

		// We must clear acceleration each frame
		this.acceleration.mult(0);
		this.velocity.limit(this.maxSpeed);

	}

	this.reset = function () {
		this.position.y = height;
	}

	this.applyForce = function (force) {
		this.acceleration.add(force);
		this.acceleration.limit(this.maxForce);
	}

	this.checkTarget = function (target) {
		var d = dist(this.position.x, this.position.y, target.x, target.y);
		if (d < 10) {
			this.completed = true;
		}
	}

	this.hasCrashed = function (obstacle) {
		this.crashed = this.position.y < 0 || this.position.x < 0 || this.position.x > width || this.hit(obstacle);
		return this.crashed;
	}

	this.hit = function (obstacle) {
		var rocketTop = this.position.y - this.height;
		var rocketBottom = this.position.y;
		var rocketLeft = this.position.x;
		var rocketRight = this.position.x + this.width;

		var obstacleTop = obstacle.y - obstacle.height;
		var obstacleBottom = obstacle.y;
		var obstacleLeft = obstacle.x;
		var obstacleRight = obstacle.x + obstacle.width;

		return rocketTop <= obstacleBottom && rocketTop <= obstacleTop 
			&& rocketLeft >= obstacleLeft && rocketLeft <= obstacleRight;
	}

	this.calculateFitness = function (target) {
		var d = dist(this.position.x, this.position.y, target.x, target.y);
		this.fitness = map(d, 0, width, width, 0);
		if (this.completed) {
			this.fitness *= 10;
		}
		if (this.crashed) {
			this.fitness /= 10;
		}
	}
}
