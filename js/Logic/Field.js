
class Field {

    const width = 8;

    constructor(opts) {
        this.opts = opts;
        this.positionToMove = {
            x: null,
            y: null
        };
    }

    set positionToMove(x, y) {
        this.positionToMove = {
            x: x,
            y: y
        };
    }

    get positionToMove() {
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
		let fieldState = [];
	    for (let n = 8; n > 0; n--) {
	        let evenTrigger = n % 2 === 0;
	        for (let l = 0; l < 8; l++) {
	            let letter = ['A','B','C','D','E','F','G','H'][l];
	            let color = evenTrigger ? 'white' : 'black';
	            evenTrigger = !evenTrigger;
	            let state = {
	                alias: letter + n,
	                color: color,
	                posX: 0,
	                posY: 0,
	                isEmpty: true
	            }
	            fieldState.push(state);
	        }
	    }
	    return fieldState;
	}

}
