describe("basicAnimationModel", function() {

	var Model;

	beforeEach(function() {
		Model = new basicAnimationModel();
	});

	it("Square 1 Default X position", function() {
		expect(Model.getSquare1X()).toEqual(0);
	});

	it("Square 1 Default Y position", function() {
		expect(Model.getSquare1Y()).toEqual(50);
	});

	it("Should be able set x", function() {
		Model.setSquare1X(2);
		expect(Model.getSquare1X()).toEqual(2);
	});

	it("Should be able set y", function() {
		Model.setSquare2Y(2);
		expect(Model.getSquare2Y()).toEqual(2);
	});

	it("Square 2 Default X position", function() {
		expect(Model.getSquare2X()).toEqual(50);
	});

	it("Square 2 Default Y position", function() {
		expect(Model.getSquare2Y()).toEqual(0);
	});

	it("Should be able set x", function() {
		Model.setSquare2X(2);
		expect(Model.getSquare2X()).toEqual(2);
	});

	it("Should be able set y", function() {
		Model.setSquare2Y(2);
		expect(Model.getSquare2Y()).toEqual(2);
	});

	
	
	it("should be able move and move x", function() {
		Model.setSquare1X(2);
		Model.setSquare1Y(2);

		Model.move();

		expect(Model.getSquare1X()).toEqual(3);
	});

	it("should be able move and not move Y", function() {
		Model.setSquare1X(2);
		Model.setSquare1Y(2);

		Model.move();

		expect(Model.getSquare1Y()).toEqual(2);
	});

	
	it("should be able move and move Y", function() {
		Model.setSquare2X(2);
		Model.setSquare2Y(2);

		Model.move();

		expect(Model.getSquare2Y()).toEqual(3);
	});

	it("should be able move and not move X", function() {
		Model.setSquare2X(2);
		Model.setSquare2Y(2);

		Model.move();

		expect(Model.getSquare2X()).toEqual(2);
	});

	
	
	
	
	
	it("should be able to reset at 300",function(){
		Model.setSquare1X(299);
		Model.move();
		
		expect(Model.getSquare1X()).toEqual(300);
	});
	
	it("should be able to reset at 300",function(){
		Model.setSquare1X(300);
		Model.move();
		
		expect(Model.getSquare1X()).toEqual(0);
	});
	
	

	it("should be able to reset at 300",function(){
		Model.setSquare2Y(299);
		Model.move();
		
		expect(Model.getSquare2Y()).toEqual(300);
	});
	
	it("should be able to reset at 300",function(){
		Model.setSquare2Y(300);
		Model.move();
		
		expect(Model.getSquare2Y()).toEqual(0);
	});

	
	
	
	
});
