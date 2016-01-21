
import Figure from '../Figure';

class King extends Figure {

    constructor(opts) {
        super(opts);
        this.color = opts.color;
        this.code = this.color ? '&#9818;' : '&#9812;';
    }

    move(x, y) {

    	if (x - this.pos.x < 2 && x - this.pos.x > -2 && 
    		y - this.pos.y < 2 && y - this.pos.y < -2) {
    			this.pos.x = x;
    			this.pos.y = y;
    	}

    }

}

export default King;
