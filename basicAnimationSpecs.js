describe("basicAnimationModel", function() {

	var Model;

	beforeEach(function() {
		Model = new basicAnimationModel();
	});

	it("should be able to get the current X position", function() {
		expect(Model.getX()).toEqual(0);
	});

	it("should be able to get the current Y position", function() {
		expect(Model.getY()).toEqual(0);
	});

	it("Should be able set x", function() {
		Model.setX(2);
		expect(Model.getX()).toEqual(2);
	});
	
	it("Should be able set y", function() {
		Model.setY(2);
		expect(Model.getY()).toEqual(2);
	});
	
	

});

describe("BasicAnimationController", function(){
	
	var controller;
	
	beforeEach(function(){
		controller = new basicAnimationController();
	});
	
	it("should be able to do ",function(){
		expect(controller.stiff()).toEqual(1);
	});
	
	
	
});


/*
 * describe("Player", function() { var player; var song;
 * 
 * beforeEach(function() { player = new Player(); song = new Song(); });
 * 
 * it("should be able to play a Song", function() { player.play(song);
 * expect(player.currentlyPlayingSong).toEqual(song);
 */