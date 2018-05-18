var createSelfReference = function() {
	var startObj = {};
	startObj.val = 1;
	startObj.rest = startObj;
	return startObj;
}

createSelfReference();

