

var tileSize = 100;
var boardWidth = 500;
var boardHeight = 500;
var board;
var players;
var player;


function setup() {
	// setup code
	createCanvas(boardWidth, boardHeight);
	var tiles = [];

	var numTiles = (boardWidth / tileSize) * (boardHeight / tileSize);
	var row = 0;
    var col = 0;
    var numCols = floor( boardWidth / tileSize);
    var numRows = floor( boardHeight / tileSize);

    var tileId = 0;
    var reverse = false;
	for( var i=0; i<numTiles; i++)
	{
	    // Going off to the right, change direction on next row
	    if(col > numCols-1)
	    {
	        col--;
	        reverse = true;
	        row++;
	    }
	    // Going off to the left, change direction on next row
	    else if(col < 0)
	    {
	        col++;
	        reverse = false;
	        row++;
	    }
	    console.log(row + "," + col);
	    tiles[i] = createTile(tileId, row, col);
	    tileId++;
	    // Work our direction to move columns
	    reverse ? col-- : col++;
	}

    board = new Board( boardWidth, boardHeight, tiles);

	board.addLadder( new Ladder(board.tiles[12], board.tiles[20]) );
	board.addLadder( new Ladder(board.tiles[1], board.tiles[6]) );



    player = new Player(tiles[0]);
}

function draw() {
	// draw code
	frameRate(1);
	clear();
    background(255);
	board.render();

	if( !player.finished)
	{
        var move = floor( random(1,6) );
        player.move( nextTile( player, move ) );
	}
	player.render();

}


function createTile( tileId, row, col)
{
    var posx = col * tileSize;
    var posy = (boardHeight - row * tileSize) - tileSize;
    return new Tile( tileId, row, col, posx, posy, tileSize );
}

function nextTile( player, numMoved )
{
    var nextTile = player.tile.id + numMoved;
    var maxTile = board.tiles.length - 1;
    if( nextTile > maxTile)
    {
        nextTile = maxTile;
        player.finish();
        console.log("Player finished on tile " + (nextTile + 1));
    }
    else
    {
        console.log("Player on " + (player.tile.id + 1) + ", moving " + numMoved + ". Next tile " + (nextTile + 1));
    }
    return board.tiles[nextTile];
}