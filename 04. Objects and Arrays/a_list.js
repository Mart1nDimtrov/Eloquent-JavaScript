var createList = function(arr) {
	var startObj = {};
	startObj.val = arr[arr.length - 1];
	startObj.rest = null;
	var tmp = startObj;
	for (var i = arr.length - 2; i >= 0 ; i--) {
		var newObj = {};
		newObj.val = arr[i];
		newObj.rest = {
			tmp
		}
		tmp = newObj;
	};
	return tmp;
}
var arr = [1, 2, 3];
createList(arr);

