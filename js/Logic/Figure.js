
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
    }

    moveValidity(curX, curY, x, y) {
        if (curX >= 0 && x < this.width && 
            curY >= 0 && y < this.width) {
            return true;
        } else {
            return false;
        }
    }

    get _name() {
        return this.name;
    }

    set _name(name) {
        this.name = name;
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

export default Figure;