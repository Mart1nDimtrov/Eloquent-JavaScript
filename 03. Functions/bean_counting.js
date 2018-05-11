function countChar(word, char) {
	var count = 0;
	word.split("").map(c => {
		if(c == char) {
			count++;
		}
	});
	return count;
}