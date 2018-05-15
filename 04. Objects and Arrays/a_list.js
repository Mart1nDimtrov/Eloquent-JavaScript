var createList = function(arr) {
	var list = {};
	for (var i = arr.length- 1; i >= 0 ; i--) {
		list.value = arr[i];
		list.rest = list;
	};
	return list;
}
var arr = [1, 2, 3];
createList(arr);

