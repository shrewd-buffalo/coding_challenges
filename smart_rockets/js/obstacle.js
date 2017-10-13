function Obstacle(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;

	this.render = function () {
		fill(255)
		rect(this.x, this.y - this.height, this.width, this.height);
	}
}
