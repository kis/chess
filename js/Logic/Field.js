
import GameController from './GameController';

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
        var gameController = new GameController();

        let data = new Array();
        let isWhite = false;

        for (let i = 7; i >= 0; i--) {
            isWhite = !isWhite;
            data[i] = {
                index: 8 - i, 
                arr: new Array()
            };
            for (let j = 1; j < 9; j++) {
                let figure = gameController.getFigureByPosition({
                    letter: this.letters[j-1], 
                    num: 8 - i,
                    x: j - 1
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
                    class: isWhite ? 'chess-field white' : 'chess-field black'
                };  
            }
        }

        return data;
	}

}

export default Field;