function Tile(id, row, col, x, y, size) {
    this.id = id;
    this.row = row;
    this.col = col;
    this.size = size;
    this.x = x
    this.y = y;
    this.fillColour = ( id % 2 == 0) ? 200 : 150;

	this.snake;
	this.ladder;

	this.render = function () {
	    this.drawTile();
	    this.addTileLabel();
	}

	this.setSnake = function( snake )
	{
		this.snake = snake;
	}

	this.hasSnake = function()
	{
		return this.snake !== undefined;
	}

	this.setLadder = function( ladder )
	{
		this.ladder = ladder;
	}

	this.hasLadder = function()
	{
		return this.ladder !== undefined;
	}

	this.drawTile = function()
	{
        push();
	    fill(this.fillColour);
        noStroke();
        translate(this.x, this.y);
        rect(0,0,size,size);
        pop();
	}

    this.addTileLabel = function()
	{
        push();
        fill( 0 );
        rectMode(CENTER)
        textSize(8);
        translate(this.x, this.y);
        text( this.id + 1, size-5, size-5, 10, 10 );
        pop();
	}
}