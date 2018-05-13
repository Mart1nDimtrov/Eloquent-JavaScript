var range = function(start, end, step = 1) {
	var arr = [];
	if (step < 1) {
		for (var i =  start; i >= end; i+= step) {
			arr.push(i);
		};
	}
	else {
		for (var i =  start; i <= end; i+= step) {
			arr.push(i);
		};
	}
	
	return arr;
}

var sum = function (arr) {
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
			sum += arr[i];
		};

	return sum;
}

console.log(sum(range(1, 10)));