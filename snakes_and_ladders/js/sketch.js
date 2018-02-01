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

	board.addLadder(new Ladder(board.tiles[12], board.tiles[20]));
	board.addLadder(new Ladder(board.tiles[1], board.tiles[6]));

	board.addSnake(new Snake(board.tiles[16], board.tiles[5]));
	board.addSnake(new Snake(board.tiles[11], board.tiles[0]));

    player = new Player(board);
}

function draw() {
	// draw code
	frameRate(5);
	clear();
    background(255);
	board.render();
	player.render();

    if( frameCount % 2 == 0)
    {
        player.checkForLadderOrSnake();
    }
    else
    {
        var numMoves = floor( random(1,5) );
	    player.move( numMoves );
    }
}

function createTile( tileId, row, col)
{
    var posx = col * tileSize;
    var posy = (boardHeight - row * tileSize) - tileSize;
    return new Tile( tileId, row, col, posx, posy, tileSize );
}