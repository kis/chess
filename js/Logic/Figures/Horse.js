
class Horse extends Figure {

    constructor(opts) {
        super(opts);
    }

    move(posX, posY) {

    	if (posX >= 0 && posX < 8 && this.posY < posY && posY < 8) {
	    	if ((this.posX + 1 == posX && this.posY + 2 == posY) ||
	    	    (this.posX - 1 == posX && this.posY + 2 == posY)) {
	    		this.posX = posX;
	    		this.posY = posY;
	    	}
	
	    	if ((this.posX + 2 == posX && this.posY + 1 == posY) ||
	    	    (this.posX - 2 == posX && this.posY + 1 == posY)) {
	    		this.posX = posX;
	    		this.posY = posY;
	    	}
		}
    	
    	if (posX >= 0 && posX < 8 && this.posY > posY && posY >= 0) {
	    	if ((this.posX + 2 == posX && this.posY - 1 == posY) ||
	    	    (this.posX - 2 == posX && this.posY - 1 == posY)) {
	    		this.posX = posX;
	    		this.posY = posY;
	    	}

	    	if ((this.posX + 1 == posX && this.posY - 2 == posY) ||
	    	    (this.posX - 1 == posX && this.posY - 2 == posY)) {
	    		this.posX = posX;
	    		this.posY = posY;
	    	}
    	}

    }

}
