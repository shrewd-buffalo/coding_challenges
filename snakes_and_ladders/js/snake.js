function Snake( srcTile, destTile)
{

    this.srcTile = srcTile;
    this.destTile = destTile;
	this.srcTile.setSnake( this );
	this.topOffset = 15;

    console.log("Placing snake from " + (srcTile.id + 1) + " to " + (destTile.id + 1));
    this.offset = srcTile.size / 2 ;
    this.distance = int(dist(srcTile.x, srcTile.y, destTile.x, destTile.y));

    this.render = function()
    {
        this.drawSnake();
        this.drawSnakeHead();
    }

    this.drawSnake = function()
    {
        push();
        stroke(0);
        strokeWeight(3);
        noFill();
        var pullFactor;
        var weight = 150;
        if( destTile.x > srcTile.x)
        {
            // pull to the right
            pullFactor = 1;
        }
        else
        {
            //pull to the left
            pullFactor = -1;
        }
        translate( this.offset, this.offset);
        bezier(this.srcTile.x, this.srcTile.y, this.srcTile.x + weight * pullFactor , this.srcTile.y - 20,  this.destTile.x - weight * pullFactor, this.destTile.y - 20, this.destTile.x , this.destTile.y - this.topOffset);
        pop();
    }

    this.drawSnakeHead = function()
    {
        push();
        stroke(0);
        strokeWeight(3);
        fill(0);

        translate( this.destTile.x + this.offset, this.destTile.y  + this.offset - this.topOffset);

        if( this.destTile.x < this.srcTile.x)
        {
            angleMode(DEGREES);
            rotate(-270);
        }
		var size = 4;
        triangle(
            -size, size,
            size, - size,
            size, size,
        );
        pop();
    }
}