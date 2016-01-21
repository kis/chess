
import Figure from '../Figure';

class Elephant extends Figure {

    constructor(opts) {
        super(opts);
        this.color = opts.color;
        this.code = this.color ? '&#9821;' : '&#9815;';
    }

    move(x, y) {

    	if (this.pos.x == x && 
    	   ((this.pos.y < y && y < 8) || 
    	   (this.pos.y > y && y >= 0))) {
    		this.pos.x = x;
    		this.pos.y = y;
    	}

    	if (this.pos.y == y &&
    	   ((this.pos.x < x && x < 8) || 
    	   (this.pos.x > x && x >= 0))) {
    		this.pos.x = x;
    		this.pos.y = y;
    	}

    }

}

export default Elephant;
