function Snake( x, y, length ) {

    this.position = createVector( x,  y );
    this.velocity = createVector( 0, 0 );
    this.body = []

    this.render = function()
    {

    	fill(255);
    	stroke( 255 );

        for( var i=0; i< this.body.length; i++)
        {
            push();

            translate(this.body[i].x, this.body[i].y);
//            translate(this.position.x - this.size/2, this.position.y - this.size/2);
            rect(0, 0, 10, 10);
            pop();
        }


    }

    this.update = function(x, y)
    {
        this.velocity.add( createVector(x, y));
        this.position.add( this.velocity );
        this.grow(x + 10, y + 10);

    }

    this.grow = function( x,y )
    {
        if( this.body.length < 20 )
        {
            append( this.body, new Segment(x, y));
        }

    }
}


function Segment( x, y) {

    this.x = x;
    this.y = y;

}
