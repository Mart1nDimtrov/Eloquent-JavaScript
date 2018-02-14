for (var i = 1; i <= 8; i++) {
	if (i % 2 == 0) {
		var str = "";
		for (var j = 1; j <= 4; j++) {
			str += "# "
		};
		console.log(str);
	} else {
		var str = "";
		for (var k = 1; k <= 4; k++) {
			str += " #"
		};
		console.log(str);
	};
};