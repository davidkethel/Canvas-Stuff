describe("basicAnimationModel", function() {

	var Model;

	beforeEach(function() {
		Model = new basicAnimationModel();
	});

	it("should be able to get the current X position", function() {
		expect(Model.getX()).toEqual(0);
	});

	it("should be able to get the current Y position", function() {
		expect(Model.getY()).toEqual(50);
	});

	it("Should be able set x", function() {
		Model.setX(2);
		expect(Model.getX()).toEqual(2);
	});

	it("Should be able set y", function() {
		Model.setY(2);
		expect(Model.getY()).toEqual(2);
	});

	it("should be able move and move x", function() {
		Model.setX(2);
		Model.setY(2);

		Model.move();

		expect(Model.getX()).toEqual(3);
	});

	it("should be able move and not move Y", function() {
		Model.setX(2);
		Model.setY(2);

		Model.move();

		expect(Model.getY()).toEqual(2);
	});

	it("should be able to reset at 300",function(){
		Model.setX(299);
		Model.move();
		
		expect(Model.getX()).toEqual(300);
	});
	
	it("should be able to reset at 300",function(){
		Model.setX(300);
		Model.move();
		
		expect(Model.getX()).toEqual(0);
	});
	
	
	
	
	
});
