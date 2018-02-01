function Board(width, height, tiles) {

    this.width = width;
    this.height = height;
    this.tiles = tiles;
    this.ladders = [];
    this.snakes = [];

	this.render = function () {
        for( var i=0; i<this.tiles.length; i++)
        {
            this.tiles[i].render();
        }
        for( var i=0; i<this.ladders.length; i++)
        {
            this.ladders[i].render();
        }
        for( var i=0; i<this.snakes.length; i++)
        {
            this.snakes[i].render();
        }
	}

	this.addLadder = function( ladder )
	{
	    append(this.ladders, ladder);
	}

	this.addSnake = function( snake )
	{
	    append(this.snakes, snake);
	}


}