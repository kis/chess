
class Horse extends Figure {

    constructor(opts) {
        super(opts);
    }

    move(posX, posY) {

    	if (8 - posX > 1) {
	    	if ((posX - this.posX == 1  && posY - this.posY == 2) ||
	    	    (posX - this.posX == -1 && posY - this.posY == 2)) {
	    		this.posX = posX;
	    		this.posY = posY;
	    	}
		}

		if (8 - posX > 0) {
	    	if ((posX - this.posX == 2  && posY - this.posY == 1) ||
	    	    (posX - this.posX == -2 && posY - this.posY == 1)) {
	    		this.posX = posX;
	    		this.posY = posY;
	    	}
		}
    	
    	if (posX >= 1) {
	    	if ((posX - this.posX == 2  && posY - this.posY == -1) ||
	    	    (posX - this.posX == -2 && posY - this.posY == -1)) {
	    		this.posX = posX;
	    		this.posY = posY;
	    	}
		}
    	
    	if (posX >= 0) {
	    	if ((posX - this.posX == 1  && posY - this.posY == -2) ||
	    	    (posX - this.posX == -1 && posY - this.posY == -2)) {
	    		this.posX = posX;
	    		this.posY = posY;
	    	}
    	}

    }

}
