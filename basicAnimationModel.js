// an object to maintain the state of the animation
function basicAnimationModel(context) {

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

	this.draw = function(){
		context.fillRect(50,50,50,50);
	};
	
	this.move = function() {
		x++;
		y++;
	};

};