
import King     from './Figures/King';
import Queen    from './Figures/Queen';
import Rook     from './Figures/Rook';
import Elephant from './Figures/Elephant';
import Horse    from './Figures/Horse';
import Pawn     from './Figures/Pawn';

class Field {

    constructor(opts) {
        this.opts = opts;
        this.positionToMove = {
            x: null,
            y: null
        };
        this.width = 8;
        this.letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    }

    set _positionToMove(pos) {
        this.positionToMove = {
            x: pos.x,
            y: pos.y
        };
    }

    get _positionToMove() {
        return this.positionToMove;
    }
    
    moveValidity(curX, curY, x, y) {
    	if (curX >= 0 && x < this.width && 
    		curY >= 0 && y < this.width) {
    		return true;
    	} else {
    		return false;
    	}
    }

    getInitState() {
        let data = new Array();
        let isWhite = false;

        for (let i = 7; i >= 0; i--) {
            isWhite = !isWhite;
            data[i] = {
                index: 8 - i, 
                arr: new Array()
            };
            for (let j = 1; j < 9; j++) {
                let figure = this.getFigureByPosition({
                    letter: this.letters[j-1], 
                    num: 8 - i
                });

                isWhite = !isWhite;
                data[i].arr[j] = {
                    letter: this.letters[j-1],
                    num: 8 - i,
                    x: j - 1,
                    y:  - i,
                    isEmpty: true,
                    figure: figure,
                    isBlack: !isWhite ? true : false, 
                    color: isWhite ? 'chess-field white' : 'chess-field black'
                };  
                console.log(figure)
            }
        }

        return data;
	}

    getFigures() {
        var figures = {
            kings: [],
            queens: [],
            rooks: [],
            elephants: [],
            horses: [],
            pawns: []
        };

        for(let i=0; i<2; i++) {
            figures.kings.push(new King({
                name: !i ? 'Black' : 'White' + ' King',
                color: !i ? true : false
            }));
        }

        for(let i=0; i<2; i++) {
            figures.queens.push(new Queen({
                name: !i ? 'Black' : 'White' + ' Queen',
                color: !i ? true : false,
            }));
        }

        for(let i=0; i<4; i++) {
            figures.rooks.push(new Rook({
                name: i < 2 ? 'Black' : 'White' + ' Rook',
                color: i < 2 ? true : false,
            }));
        }

        for(let i=0; i<4; i++) {
            figures.elephants.push(new Elephant({
                name: i < 2 ? 'Black' : 'White' + ' Elephant',
                color: i < 2 ? true : false,
            }));
        }

        for(let i=0; i<4; i++) {
            figures.horses.push(new Horse({
                name: i < 2 ? 'Black' : 'White' + ' Horse',
                color: i < 2 ? true : false,
            }));
        }

        for(let i=0; i<16; i++) {
            figures.pawns.push(new Pawn({
                name: i < 8 ? 'Black' : 'White' + ' Pawn',
                color: i < 8 ? true : false,
            }));
        }

        return figures;
    }

    getFigureByPosition(pos) {
        if (pos.num == 1) {
            if (pos.letter == 'a') {
                return this.getFigures().rooks[0];
            }

            if (pos.letter == 'b') {
                return this.getFigures().horses[0];
            }

            if (pos.letter == 'c') {
                return this.getFigures().elephants[0];
            }

            if (pos.letter == 'd') {
                return this.getFigures().queens[0];
            }

            if (pos.letter == 'e') {
                return this.getFigures().kings[0];
            }

            if (pos.letter == 'f') {
                return this.getFigures().elephants[1];
            }

            if (pos.letter == 'g') {
                return this.getFigures().horses[1];
            }

            if (pos.letter == 'h') {
                return this.getFigures().rooks[1];
            }
        }

        if (pos.num == 2) {
            return this.getFigures().rooks[0];
        }

        return null;
    }

}

export default Field;