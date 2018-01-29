function Tile(id, row, col, x, y, size) {
    this.id = id;
    this.row = row;
    this.col = col;
    this.size = size;
    this.x = x
    this.y = y;
    this.fillColour = ( id % 2 == 0) ? 200 : 150;

	this.render = function () {
	    this.drawTile();
	    this.addTileLabel();

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