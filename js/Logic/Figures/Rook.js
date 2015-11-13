
import Figure from '../Figure';

class Rook extends Figure {

    constructor(opts) {
        super(opts);
    }

    move(x, y) {

    	if (this.pos.x > this.pos.y) {
    		if (this.pos.x - this.pos.y == x - y) {
    			this.pos.x = x;
    			this.pos.y = y;
    		}
    	}

    	if (this.pos.x < this.pos.y) {
    		if (this.pos.y - this.pos.x == y - x) {
    			this.pos.x = x;
    			this.pos.y = y;
    		}
    	}

    }

}

export default Rook;