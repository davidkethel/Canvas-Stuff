function basicAnimationController() {

	var model = new basicAnimationModel();

	this.move = function() {
		model.move();
		return model;
	};

}