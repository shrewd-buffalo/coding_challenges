function Board(width, height, tiles) {

    this.width = width;
    this.height = height;
    this.tiles = tiles;

	this.render = function () {
        for( var i=0; i<this.tiles.length; i++)
        {
            this.tiles[i].render();
        }
	}


}