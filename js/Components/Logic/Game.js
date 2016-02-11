
class Game {

    constructor(opts) {
        this.time = null;
        this.player1 = {
            name: opts.p1name,
            move: {
                allow: opts.p1allow,
                time: null
            }
        };
        this.player2 = {
            name: opts.p2name,
            move: {
                allow: opts.p2allow,
                time: null
            }
        };
        this.type = opts.type;
        this.level = opts.level;
    }

    get player1Name() {
        return this.player1.name;
    }

    get isPlayer1Move() {
        return this.player1.move.allow;
    }

    get player2Name() {
        return this.player2.name;
    }

    get isPlayer2Move() {
        return this.player2.move.allow;
    }

    get level() {
        return this.level;
    }

    start() {
        this.time = new Date();
    }

    end() {

    }
    
    translateCoordsToAlias(x,y) {
        return [x,y];
    }

    saveCurrentState() {

    }


}
