
class Figure {

    constructor(opts) {
        this.color = opts.color;
    }

    setInitPos(pos) {
        this.initPos = pos;
        this.pos = Object.assign({}, this.initPos);
    }

    move(pos) {
        this.pos.x = pos.x;
        this.pos.y = pos.y; 
    }

}

export default Figure;