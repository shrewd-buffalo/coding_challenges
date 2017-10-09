function Stream(x, y, numSymbols, width) {
	this.numSymbols = numSymbols;
	this.width = width;
	this.symbols = [];
	this.x;
	this.y;
	this.speed = random(3, 10);

	for (var i = 0; i < numSymbols; i++) {
		this.symbols[i] = new Symbol(x, y + (i * 20), width, this.speed);
		if (i == int(this.numSymbols) && int(round(random(0, 6)) == 3)) {
			this.symbols[i].setFirst();
		}
	}

	this.render = function () {
		this.symbols.forEach(function (s) {
			s.render();
		});
	}

	this.update = function () {
		this.symbols.forEach(function (s) {
			s.update();
		});
	}
}
