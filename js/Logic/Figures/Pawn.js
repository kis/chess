
class Pawn extends Figure {

    constructor(opts) {
        super(opts);
    }

    move(x, y) {

    	//TODO
    	if (x - this.pos.x < 2 && y - this.pos.y < 2) {

    		if (this.pos.x == x && y - this.pos.y == 1) {

    		}

    		if (this.pos.y == y && (x - this.pos.x == 1 || x - this.pos.x == -1)) {

    		}

    		this.pos.x = x;
    		this.pos.y = y;
    	}

    }

}
