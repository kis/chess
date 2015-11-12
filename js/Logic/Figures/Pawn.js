
class Pawn extends Figure {

    constructor(opts) {
        super(opts);
    }

    move(x, y) {

    	if (x - this.pos.x < 2 && y - this.pos.y < 2) {
    		if (this.initPos.x == this.pos.x && this.initPos.y == this.pos.y) {
                if (this.pos.x == x && y - this.pos.y == 2) {
                    this.pos.x = x;
                    this.pos.y = y;
                }
            }

            if (this.pos.x == x && y - this.pos.y == 1) {
                this.pos.x = x;
                this.pos.y = y;
    		}

    		if (this.pos.y == y && (x - this.pos.x == 1 || x - this.pos.x == -1)) {
                this.pos.x = x;
                this.pos.y = y;
    		}
    	}

    }

}
