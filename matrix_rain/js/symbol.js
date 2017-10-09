function Symbol(x, y, size, speed) {
	this.x = x;
	this.y = y;
	this.speed = speed;
	this.size = size;
	this.first = false;

	// Katakana - https://en.wikipedia.org/wiki/Katakana_(Unicode_block)
	this.baseUnicodeValue = 0x30A1;
	this.character = String.fromCharCode(this.baseUnicodeValue + random(0, 90));

	this.render = function () {
		textSize(this.size);
		if (this.first) {
			fill(200, 255, 200);
		} else {
			fill(0, 255, 70);
		}

		text(this.character, this.x, this.y);
	}
	
	this.setFirst = function()
	{
		this.first = true;
	}

	this.update = function () {
		if (frameCount % 10 == 0) {
			this.generateCharacter();
		}
		if (this.y >= height) {
			this.y = 0;
		} else {
			this.y += this.speed;
		}
	}

	this.generateCharacter = function () {
		this.character = String.fromCharCode(this.baseUnicodeValue + random(0, 90));
	}

}
