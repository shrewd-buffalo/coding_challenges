function Ladder(srcTile, destTile)
{
    this.srcTile = srcTile;
    this.destTile = destTile;

	this.srcTile.setLadder( this );

    this.angle;
    this.distance
    this.ladderWidth = 10;

    console.log("Placing ladder from " +( srcTile.id + 1 ) + " to " + (destTile.id + 1 ));
    this.offset = srcTile.size / 2 ;
    this.distance = int(dist(srcTile.x, srcTile.y, destTile.x, destTile.y));

    // angle so that dest is relative to src
    angleMode(DEGREES);
    this.angle = atan2(destTile.y - srcTile.y, destTile.x - srcTile.x);

    this.render = function()
    {
        push();
        translate( this.srcTile.x + this.offset, this.srcTile.y + this.offset);
        rotate( this.angle - 90);
        this.drawLadder(this.ladderWidth, this.distance);
        pop();
    }

    this.drawLadder = function(width, height)
    {
        var sep = 10;
        var numRungs = floor(height/sep);

        line(0, 0, 0, height);
        line(width, 0, width, height);

        for( var i=0; i<numRungs - 1; i++)
        {
            var x1 = 0;
            var y = i*sep + sep;

            var x2 = width;
            line(x1, y, x2, y);
        }
    }
}


