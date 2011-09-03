function bringToFront(colours, colour) {

	if (colours.length == 3) {
		if (colours[0] == colour) {

			var newArray = [];

			newArray[0] = colours[1];
			newArray[1] = colours[2];
			newArray[2] = colours[0];
			return newArray;
		}

		if (colours[1] == colour) {

			var newArray = [];
			newArray[0] = colours[0];
			newArray[1] = colours[2];
			newArray[2] = colours[1];

			return newArray;
		}
	}

	if (colours.length == 2) {
		if (colours[1] != colour) {

			var newArray = [];

			newArray[0] = colours[1];
			newArray[1] = colours[0];
			return newArray;
		}
	}

	return colours;
}