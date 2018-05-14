var reverseArray = function(arr) {
	var newArr = [];
	for (var i = arr.length - 1; i >= 0; i--) {
		newArr.push(arr[i]);
	};
	return newArr;
};

var reverseArrayInPlace = function(arr) {
	for (var i = 0; i <= arr.length / 2 - 1; i++) {
		var temp = arr[i];
		arr[i] = arr[(arr.length - i) - 1];
		arr[(arr.length - i) - 1] = temp;
	};
	return arr;
};

var arr = [1, 2, 3, 4, 5];
reverseArrayInPlace(arr);