describe("BringToFront", function() {

	it("should be able to do this", function() {
		expect(bringToFront([ "red", "green", "blue" ], "red"))
				.toEqual("green");

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
 * expect(player.isPlaying).toBeFalsy();
 *  // demonstrates use of 'not' with a custom matcher
 * expect(player).not.toBePlaying(song); });
 * 
 * 
 * });
 */