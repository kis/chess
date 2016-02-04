
class Figure {

    constructor(opts) {
        this.name = opts.name;

        this.initPos = opts.init ? {
            x: opts.init.x,
            y: opts.init.y
        } : null;

        this.pos = opts.initPos ? {
            x: this.initPos.x,
            y: this.initPos.y
        } : null;
        
        this.code = opts.code || null;

        this.width = 8;
    }

    move(pos) {
        this.pos.x = pos.x;
        this.pos.y = pos.y; 
    }

    get _name() {
        return this.name;
    }

    set _name(name) {
        this.name = name;
    }

}

export default Figure;