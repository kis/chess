
import Figure from '../Figure';

class Queen extends Figure {

    constructor(opts) {
        super(opts);
    }

    move(x, y) {

        if (x !== this.pos.x) {
            if (y == this.pos.y || 
                this.pos.x - x == y - this.pos.y || 
                this.pos.x - x == this.pos.y - y) {
                this.pos.x = x;
                this.pos.y = y;
            }
        }

        if (x == this.pos.x && y !== this.pos.y) {
            this.pos.x = x;
            this.pos.y = y;
        }

    }

}

export default Queen;