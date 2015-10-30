
class Field {

    const width = 8;

    constructor(opts) {
        this.opts = opts;
        this.positionToMove = {
            x: null,
            y: null
        };
    }

    set positionToMove(x, y) {
        this.positionToMove = {
            x: x,
            y: y
        };
    }

    get positionToMove() {
        return this.positionToMove;
    }

}
