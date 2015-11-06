
class Queen extends Figure {

    constructor(opts) {
        super(opts);
    }

    move(x, y) {

    	if (x - this.pos.x < 2 && x - this.pos.x > -2 && 
    		y - this.pos.y < 2 && y - this.pos.y < -2) {
    			this.pos.x = x;
    			this.pos.y = y;
    	}

    }

}
