
import Figure from '../Figure';

class Elephant extends Figure {

    constructor(opts) {
        super(opts);
        this.color = opts.color;
        this.code = this.color ? '&#9821;' : '&#9815;';
    }

    isValidMove(pos) {

    	if (this.pos.x == pos.x && 
    	   ((this.pos.y < pos.y && pos.y < 8) || 
    	    (this.pos.y > pos.y && pos.y >= 0))) {
    		return true;
    	}

    	if (this.pos.y == pos.y &&
    	   ((this.pos.x < pos.x && pos.x < 8) || 
    	    (this.pos.x > pos.x && pos.x >= 0))) {
    		return true;
    	}

        return false;

    }

}

export default Elephant;
