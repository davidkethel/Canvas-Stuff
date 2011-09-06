// an object to maintain the state of the animation
function basicAnimationModel() {

	var x = 0;
	var y = 0;

	this.getX = function() {
		return x;
	};

	this.getY = function() {
		return y;
	};

	this.setX = function(newX) {
		x = newX;
	};

	this.setY = function(newY) {
		y = newY;
	};

	this.move = function() {
		x++;
		y++;
	};

};