
import Figure from '../Logic/Figure';

class King extends Figure {

    constructor(opts) {
        super(opts);
        this.color = opts.color;
        this.code = this.color ? '&#9818;' : '&#9812;';
    }

    isValidMove(pos) {

    	if (pos.x - this.pos.x < 2 && pos.x - this.pos.x > -2 && 
    		pos.y - this.pos.y < 2 && pos.y - this.pos.y < -2) {
    			return true;
    	}

        return false;

    }

}

export default King;
