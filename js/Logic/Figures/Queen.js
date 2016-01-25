
import Figure from '../Figure';

class Queen extends Figure {

    constructor(opts) {
        super(opts);
        this.color = opts.color;
        this.code = this.color ? '&#9819;' : '&#9813;';
    }

    isValidMove(pos) {

        if (pos.x !== this.pos.x) {
            if (pos.y == this.pos.y || 
                this.pos.x - pos.x == pos.y - this.pos.y || 
                this.pos.x - pos.x == this.pos.y - pos.y) {
                return true;
            }
        }

        if (pos.x == this.pos.x && pos.y !== this.pos.y) {
            return true;
        }

        return false;

    }

}

export default Queen;