
class Figure {

    constructor(opts) {
        this.name = opts.name;
        this.initPos = {
            x: opts.init.x,
            y: opts.init.y
        };
        this.pos = {
            x: opts.posX,
            y: opts.posY
        };
    }

    get name() {
        return this.name;
    }

    get posX() {
        return this.pos.x;
    }

    set posX(posX) {
        this.pos.x = posX;
    }

    get posY() {
        return this.pos.y;
    }

    set posY(posY) {
        this.pos.y = posY;
    }



}
