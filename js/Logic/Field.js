
import InitController from './InitController';

class Field {

    constructor() {
        this.letters = this.getLetters();
        this.data = this.getInitState();
    }

    getData() {
        return this.data;
    }

    getLetters() {
        let letters = [];
        for(let i=97; i<105; i++) {
            letters.push(String.fromCharCode(i));
        }
        return letters;
    }

    getMoveStatus(elData, pos) {
        var currentField = this.data[pos.y][pos.x];
        var isValidMove = elData.figure.isValidMove(pos);

        var oursFigure = currentField.figure ? elData.figure.color == currentField.figure.color : null;
        var status = null;

        if (!currentField.figure) {
            status = {id: 1, valid: isValidMove, info: "move to empty cell"};
        } else if (!oursFigure) {
            status = {id: 2, valid: isValidMove, info: "move to enemy's cell"};
        } else if (oursFigure) {
            status = {id: 2, valid: isValidMove, info: "move to cell with your figure"};
        }    

        return status;       
    }

    getInitState() {
        let initController = new InitController();
        let data = new Array();

        for (let i = 7; i >= 0; i--) {
            data[i] = new Array();
            for (let j = 0; j < 8; j++) {
                data[i][j] = {
                    figure: initController.getFigureByPosition({x: j, y: i}),
                    class: (!(i%2) && !(j%2)) || (i%2 && j%2) ? 'white' : 'black'
                };
            }
        }

        return data;
	}

}

export default Field;