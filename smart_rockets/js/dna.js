function DNA(numGenes, inheritedGenes) {
	this.numGenes = numGenes;
	this.genes = [];

	//console.log('numGenes : ' + numGenes);

	if (inheritedGenes.length == 0) {
		for (var i = 0; i < this.numGenes; i++) {
			this.genes[i] = p5.Vector.random2D();
			//console.log('i['+i+'] : ' + this.genes[i].x + ', ' + this.genes[i].y );
		}
	} else {
		this.genes = inheritedGenes;
	}

	this.crossover = function (parentBDna) {
		var newgenes = [];
		var mid = floor(random(this.genes.length));
		for (var i = 0; i < this.genes.length; i++) {
			if (i > mid) {
				newgenes[i] = this.genes[i];
			} else {
				newgenes[i] = parentBDna.genes[i];
			}
		}
		// random positional transfer
		return new DNA(numGenes, newgenes);
	}

	/*
	Small random chance to mutate a gene
	 */
	this.mutation = function () {
		for (var i = 0; i < this.genes.length; i++) {
			if (random(1) < 0.01) {
				this.genes[i] = p5.Vector.random2D();
			}
		}
	}
}
