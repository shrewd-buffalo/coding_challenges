function Player(board) {

	this.board = board;
    this.currentTile = board.tiles[0];
    this.finished = false;
    this.maxTileId = this.board.tiles.length - 1;

	this.render = function () {
	    push();
	    fill(0);
	    translate( this.currentTile.x + this.currentTile.size / 2, this.currentTile.y + this.currentTile.size / 2);
        ellipse(0, 0, 10, 10);
        pop();
	}

	this.move = function (numMoves)
	{
		if( !this.finished)
		{
			this.currentTile = this.getNextTile( numMoves );
            if( this.currentTile.id == this.maxTileId)
            {
                this.finished = true;
                console.log("Player finished on tile " + (this.currentTile.id));
            }
		}
	}

	this.checkForLadderOrSnake = function ()
	{
		if( !this.finished)
		{
			if( this.currentTile.hasSnake() )
			{
			    var skipToTile = this.currentTile.snake.destTile;
				console.log("Tile " + (this.currentTile.id + 1) + " is a snake, skipping to " + (skipToTile.id + 1));
				this.currentTile = skipToTile;
			}
			else if( this.currentTile.hasLadder() )
			{
			    var skipToTile = this.currentTile.ladder.destTile;
				console.log("Tile " + (this.currentTile.id + 1) + " is a ladder, skipping to " + (skipToTile.id + 1) );
				this.currentTile = skipToTile;
			}
		}
	}

	this.getNextTile = function( numMoved )
	{
		var nextTileId = this.currentTile.id + numMoved;

		if( nextTileId > this.maxTileId)
		{
			nextTileId = this.maxTileId;
		}
		else
		{
			nextTile = board.tiles[nextTileId ];
			console.log("Player on " + (this.currentTile.id + 1) + ", moving " + numMoved + " to " + (nextTileId + 1));
		}
		return nextTile;
	}
}