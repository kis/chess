
class Figure {

    constructor(opts) {
        this.initPos = opts.init ? {
            x: opts.init.x,
            y: opts.init.y
        } : null;

        this.pos = opts.initPos ? {
            x: this.initPos.x,
            y: this.initPos.y
        } : null;
        
        this.code = opts.code || null;
    }

    move(pos) {
        this.pos.x = pos.x;
        this.pos.y = pos.y; 
    }

}

export default Figure;