function Population(size, target, obstacle) {

	this.lifespan = 300;
	this.age = 0;
	this.breedingPool = [];

	this.rockets = [];
	for (var i = 0; i < size; i++) {
		this.rockets[i] = new Rocket(width / 2, height, new DNA(this.lifespan, []));
	}

	this.render = function () {
		this.rockets.forEach(function (rocket) {
			rocket.render();
		});
	}

	this.update = function () {

		for (var i = this.rockets.length - 1; i >= 0; i--) {
			var rocket = this.rockets[i];
			if (rocket.hasCrashed(obstacle)) {
				//console.log('crashed');
			} else if (!rocket.crashed) {
				//console.log('update ' + this.age);
				rocket.update(this.age);
			}
		}
		this.age++;

		if (this.age > this.lifespan) {
			this.breed();
			this.age = 0;
		}
	}

	this.breed = function () {
		this.breedingPool = [];
		for (var r = 0; r < this.rockets.length; r++) {
			var rocket = this.rockets[r];

			rocket.calculateFitness(target);
			// More success, more chance at breeding
			for (var i = 0; i < rocket.fitness; i++) {
				//console.log('push');
				this.breedingPool.push(rocket);
			}
			//rocket.reset();
		}

		for (var i = 0; i < size; i++) {
			var parentA = this.breedingPool[round(random(0, this.breedingPool.length - 1))];
			var parentB = this.breedingPool[round(random(0, this.breedingPool.length - 1))];
			var newDna = parentA.dna.crossover(parentB.dna);
			newDna.mutation();
			this.rockets[i] = new Rocket(width / 2, height, newDna);
		}

	}

}
