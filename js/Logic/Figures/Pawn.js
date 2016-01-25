
import Figure from '../Figure';

class Pawn extends Figure {

    constructor(opts) {
        super(opts);
        this.color = opts.color;
        this.code = this.color ? '&#9823;' : '&#9817;';
    }

    isValidMove(pos) {

    	if (pos.x - this.pos.x < 2 && pos.y - this.pos.y < 2) {
    		if (this.initPos.x == this.pos.x && this.initPos.y == this.pos.y) {
                if (this.pos.x == pos.x && pos.y - this.pos.y == 2) {
                    return true;
                }
            }

            if (this.pos.x == pos.x && pos.y - this.pos.y == 1) {
                return true;
    		}

    		if (this.pos.y == pos.y && (pos.x - this.pos.x == 1 || pos.x - this.pos.x == -1)) {
                return true;
    		}
    	}

        return false;

    }

}

export default Pawn;
