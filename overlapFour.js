function bringToFront(colours, colour) {

	var colourFound = false;
	var newArray = [];

	for ( var i = 0; i < colours.length; i++) {

		if (colours[i] == colour) {
			colourFound = true;
		}

		if (colourFound == true) {
			newArray[i] = colours[i + 1];
		} else {
			newArray[i] = colours[i];
		}
	}

	newArray[colours.length - 1] = colour;
	return newArray;
}