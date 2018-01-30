function Board(width, height, tiles) {

    this.width = width;
    this.height = height;
    this.tiles = tiles;
    this.ladders = [];

	this.render = function () {
        for( var i=0; i<this.tiles.length; i++)
        {
            this.tiles[i].render();
        }
        for( var i=0; i<this.ladders.length; i++)
        {
            this.ladders[i].render();
        }
	}

	this.addLadder = function( ladder )
	{
//	     push(this.ladders, ladder);
	     append(this.ladders, ladder);
	}


}