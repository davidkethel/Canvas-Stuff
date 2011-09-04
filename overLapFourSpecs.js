describe("BringToFront", function() {

	it("should be able to do this", function() {
		expect(bringToFront([ "red" ], "red")).toEqual([ "red" ]);

	});

	it("should be able to do this", function() {
		expect(bringToFront([ "green" ], "green")).toEqual([ "green" ]);

	});

	it("should be able to do this", function() {
		expect(bringToFront([ "blue" ], "blue")).toEqual([ "blue" ]);
	});

	it("should be able to do this", function() {
		expect(bringToFront([ "yellow" ], "yellow")).toEqual([ "yellow" ]);
	});

	it("should be able to do this", function() {
		expect(bringToFront([ "yellow", "red" ], "red")).toEqual(
				[ "yellow", "red" ]);
	});

	it("should be able to do this", function() {
		expect(bringToFront([ "yellow", "green" ], "green")).toEqual(
				[ "yellow", "green" ]);
	});

	it("should be able to do this", function() {
		expect(bringToFront([ "yellow", "blue" ], "blue")).toEqual(
				[ "yellow", "blue" ]);
	});

	it("should be able to do this", function() {
		expect(bringToFront([ "red", "yellow" ], "yellow")).toEqual(
				[ "red", "yellow" ]);
	});

	it("should be able to do this", function() {
		expect(bringToFront([ "yellow", "red", ], "yellow")).toEqual(
				[ "red", "yellow" ]);
	});

	it("should be able to do this", function() {
		expect(bringToFront([ "yellow", "blue", ], "yellow")).toEqual(
				[ "blue", "yellow" ]);
	});

	it("should be able to do this", function() {
		expect(bringToFront([ "yellow", "green", ], "yellow")).toEqual(
				[ "green", "yellow" ]);
	});

	it("should be able to do this", function() {
		expect(bringToFront([ "blue", "red", "yellow" ], "yellow")).toEqual(
				[ "blue", "red", "yellow" ]);
	});

	it("should be able to do this", function() {
		expect(bringToFront([ "blue", "green", "yellow" ], "yellow")).toEqual(
				[ "blue", "green", "yellow" ]);
	});

	it("should be able to do this", function() {
		expect(bringToFront([ "green", "red", "yellow" ], "yellow")).toEqual(
				[ "green", "red", "yellow" ]);
	});

	it("should be able to do this", function() {
		expect(bringToFront([ "yellow", "blue", "red", ], "yellow")).toEqual(
				[ "blue", "red", "yellow" ]);
	});

	it("should be able to do this", function() {
		expect(bringToFront([ "yellow", "blue", "green", ], "yellow")).toEqual(
				[ "blue", "green", "yellow" ]);
	});

	it("should be able to do this", function() {
		expect(bringToFront([ "yellow", "green", "red", ], "yellow")).toEqual(
				[ "green", "red", "yellow" ]);
	});

	it("should be able to do this", function() {
		expect(bringToFront([ "green", "yellow", "red", ], "yellow")).toEqual(
				[ "green", "red", "yellow" ]);
	});

	it("should be able to do this", function() {
		expect(bringToFront([ "red", "yellow", "green", ], "yellow")).toEqual(
				[ "red", "green", "yellow" ]);
	});

	it("should be able to do this", function() {
		expect(bringToFront([ "red", "blue", "green", "yellow" ], "yellow"))
				.toEqual([ "red", "blue", "green", "yellow" ]);
	});

	it("should be able to do this", function() {
		expect(bringToFront([ "red", "green", "blue", "yellow" ], "yellow"))
				.toEqual([ "red", "green", "blue", "yellow" ]);
	});

	it("should be able to do this", function() {
		expect(bringToFront([ "red", "blue", "yellow", "green" ], "yellow"))
				.toEqual([ "red", "blue", "green", "yellow" ]);
	});

	it("should be able to do this", function() {
		expect(bringToFront([ "red", "green", "yellow", "blue" ], "yellow"))
				.toEqual([ "red", "green", "blue", "yellow" ]);
	});

	it("should be able to do this", function() {
		expect(bringToFront([ "red", "yellow", "blue", "green" ], "yellow"))
				.toEqual([ "red", "blue", "green", "yellow" ]);
	});

	it("should be able to do this", function() {
		expect(bringToFront([ "red", "yellow", "green", "blue" ], "yellow"))
				.toEqual([ "red", "green", "blue", "yellow" ]);
	});

	
	
	it("should be able to do this", function() {
		expect(bringToFront([  "yellow","red", "blue", "green" ], "yellow"))
				.toEqual([ "red", "blue", "green", "yellow" ]);
	});

	it("should be able to do this", function() {
		expect(bringToFront([ "yellow", "red",  "green", "blue" ], "yellow"))
				.toEqual([ "red", "green", "blue", "yellow" ]);
	});
	
	
	
	
});

/*
 * 
 * 
 * 
 * 
 * 
 * describe("Player", function() { var player; var song;
 * 
 * beforeEach(function() { player = new Player(); song = new Song(); });
 * 
 * it("should be able to play a Song", function() { player.play(song);
 * expect(player.currentlyPlayingSong).toEqual(song);
 * 
 * //demonstrates use of custom matcher expect(player).toBePlaying(song); });
 * 
 * describe("when song has been paused", function() { beforeEach(function() {
 * player.play(song); player.pause(); });
 * 
 * it("should indicate that the song is currently paused", function() {
 * expect(player.isPlaying).toBeFalsy(); // demonstrates use of 'not' with a
 * custom matcher expect(player).not.toBePlaying(song); });
 * 
 * 
 * });
 */