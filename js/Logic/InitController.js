
import King     from './Figures/King';
import Queen    from './Figures/Queen';
import Rook     from './Figures/Rook';
import Elephant from './Figures/Elephant';
import Horse    from './Figures/Horse';
import Pawn     from './Figures/Pawn';

class InitController {

    constructor(opts) {
        this.whiteFigures = this.createFigures(0);
        this.blackFigures = this.createFigures(1);
    }

    createFigures(color) {
        var figures = {
            kings: [],
            queens: [],
            rooks: [],
            elephants: [],
            horses: [],
            pawns: []
        };

        figures.kings.push(new King({
            color: color
        }));

        figures.queens.push(new Queen({
            color: color
        }));

        for(let i=0; i<2; i++) {
            figures.rooks.push(new Rook({
                color: color
            }));
        }

        for(let i=0; i<2; i++) {
            figures.elephants.push(new Elephant({
                color: color
            }));
        }

        for(let i=0; i<2; i++) {
            figures.horses.push(new Horse({
                color: color
            }));
        }

        for(let i=0; i<8; i++) {
            figures.pawns.push(new Pawn({
                color: color
            }));
        }

        return figures;
    }

    getFigureByPosition(pos) {
        if (pos.num == 1) {
            if (pos.letter == 'a') {
                return this.blackFigures.rooks[0];
            }

            if (pos.letter == 'b') {
                return this.blackFigures.horses[0];
            }

            if (pos.letter == 'c') {
                return this.blackFigures.elephants[0];
            }

            if (pos.letter == 'd') {
                return this.blackFigures.queens[0];
            }

            if (pos.letter == 'e') {
                return this.blackFigures.kings[0];
            }

            if (pos.letter == 'f') {
                return this.blackFigures.elephants[1];
            }

            if (pos.letter == 'g') {
                return this.blackFigures.horses[1];
            }

            if (pos.letter == 'h') {
                return this.blackFigures.rooks[1];
            }
        }

        if (pos.num == 2) {
            return this.blackFigures.pawns[pos.x];
        }

        if (pos.num == 7) {
            return this.whiteFigures.pawns[pos.x];
        }

        if (pos.num == 8) {
            if (pos.letter == 'a') {
                return this.whiteFigures.rooks[0];
            }

            if (pos.letter == 'b') {
                return this.whiteFigures.horses[0];
            }

            if (pos.letter == 'c') {
                return this.whiteFigures.elephants[0];
            }

            if (pos.letter == 'd') {
                return this.whiteFigures.queens[0];
            }

            if (pos.letter == 'e') {
                return this.whiteFigures.kings[0];
            }

            if (pos.letter == 'f') {
                return this.whiteFigures.elephants[1];
            }

            if (pos.letter == 'g') {
                return this.whiteFigures.horses[1];
            }

            if (pos.letter == 'h') {
                return this.whiteFigures.rooks[1];
            }
        }

        return null;
    }

}

export default InitController;