// an object to maintain the state of the animation
function basicAnimationModel(context) {

	var square1X = 0;
	var square1Y = 50;

	this.getSquare1X = function() {
		return square1X;
	};

	this.getSquare1Y = function() {
		return square1Y;
	};

	this.setSquare1X = function(newX) {
		square1X = newX;
	};

	this.setSquare1Y = function(newY) {
		square1Y = newY;
	};

	var square2X = 50;
	var square2Y = 0;

	this.getSquare2X = function() {
		return square2X;
	};

	this.getSquare2Y = function() {
		return square2Y;
	};

	this.setSquare2X = function(newX) {
		square2X = newX;
	};

	this.setSquare2Y = function(newY) {
		square2Y = newY;
	};

	this.move = function() {
		square1X++;
		if (square1X > 300) {
			square1X = 0;
		}
		
		square2Y++;
		if (square2Y > 300) {
			square2Y = 0;
		}
	
	};

	
	
	
};