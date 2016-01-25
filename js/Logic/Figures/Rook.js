
import Figure from '../Figure';

class Rook extends Figure {

    constructor(opts) {
        super(opts);
        this.color = opts.color;
        this.code = this.color ? '&#9820;' : '&#9814;';
    }

    isValidMove(pos) {

    	if (this.pos.x > this.pos.y) {
    		if (this.pos.x - this.pos.y == pos.x - pos.y) {
    			return true;
    		}
    	}

    	if (this.pos.x < this.pos.y) {
    		if (this.pos.y - this.pos.x == pos.y - pos.x) {
    			return true;
    		}
    	}

        return false;

    }

}

export default Rook;