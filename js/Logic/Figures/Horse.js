
class Horse extends Figure {

    constructor(opts) {
        super(opts);
    }

    move(x, y) {

    	if (this.pos.y < y) {
	    	if ((this.pos.x + 1 == x && this.pos.y + 2 == y) ||
	    	    (this.pos.x - 1 == x && this.pos.y + 2 == y)) {
	    		this.pos.x = x;
	    		this.pos.y = y;
	    	}
	
	    	if ((this.pos.x + 2 == x && this.pos.y + 1 == y) ||
	    	    (this.pos.x - 2 == x && this.pos.y + 1 == y)) {
	    		this.pos.x = x;
	    		this.pos.y = y;
	    	}
		}
    	
    	if (this.pos.y > y) {
	    	if ((this.pos.x + 2 == x && this.pos.y - 1 == y) ||
	    	    (this.pos.x - 2 == x && this.pos.y - 1 == y)) {
	    		this.pos.x = x;
	    		this.pos.y = y;
	    	}

	    	if ((this.pos.x + 1 == x && this.pos.y - 2 == y) ||
	    	    (this.pos.x - 1 == x && this.pos.y - 2 == y)) {
	    		this.pos.x = x;
	    		this.pos.y = y;
	    	}
    	}

    }

}
