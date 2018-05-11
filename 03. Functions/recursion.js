function isEven(number) {
	if (number == 0) {
		return true;
	}
	if (number == 1) {
		return false;
	}

	return isEven(Math.abs(number - 2));
}