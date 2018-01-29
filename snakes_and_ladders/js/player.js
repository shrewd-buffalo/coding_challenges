function Player(tile) {

    this.tile = tile;
    this.finished = false;

	this.render = function () {
	    push();
	    fill(0);
	    translate( this.tile.x + this.tile.size / 2, this.tile.y + this.tile.size / 2);
        ellipse(0, 0, 10, 10);
        pop();
	}

	this.move = function (tile) {
        this.tile = tile;
	}

	this.finish = function()
	{
	    this.finished = true;
	}
}