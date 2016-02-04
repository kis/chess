
import InitController from './InitController';

class Field {

    constructor() {
        this.letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        this.data = null;
    }

    set _data(data) {
        this.data = data;
    }

    get _data() {
        return this.data;
    }

    getMoveStatus(elData, pos) {
        var currentField = this.data[pos.y].arr[pos.x];
        var isValidMove = elData.figure.isValidMove(pos);

        if (!isValidMove) {
            this.data[pos.y].arr[pos.x]
        }

        var oursFigure = !currentField.isEmpty ? elData.figure.color == currentField.figure.color : null;
        var status = null;

        if (currentField.isEmpty) {
            status = {id: 1, valid: isValidMove, info: "move to empty cell"};
        } else if (!oursFigure) {
            status = {id: 2, valid: isValidMove, info: "move to enemy's cell"};
        } else if (oursFigure) {
            status = {id: 2, valid: isValidMove, info: "move to cell with your figure"};
        }    

        return status;       
    }

    getInitState() {
        var initController = new InitController();

        let data = new Array();
        let isWhite = false;

        for (let i = 7; i >= 0; i--) {
            isWhite = !isWhite;
            data[i] = {
                index: 8 - i, 
                arr: new Array()
            };
            for (let j = 0; j < 8; j++) {
                let figure = initController.getFigureByPosition({
                    letter: this.letters[j], 
                    num: 8 - i,
                    x: j
                });

                if (figure) {
                    figure.initPos = {
                        x: j,
                        y: i 
                    };
                    figure.pos = figure.initPos;
                }

                isWhite = !isWhite;
                data[i].arr[j] = {
                    letter: this.letters[j],
                    num: 8 - i,
                    x: j,
                    y: i,
                    isEmpty: figure ? false : true,
                    figure: figure,
                    isBlack: !isWhite ? true : false, 
                    class: isWhite ? 'white' : 'black'
                };  
            }
        }

        this.data = data;

        return data;
	}

}

export default Field;