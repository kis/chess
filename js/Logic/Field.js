
class Field {

    const width = 8;

    constructor(opts) {

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
