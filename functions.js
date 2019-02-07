function mouseIsInBox(box) {
	x = box.x+grid.x;
	y = box.y+grid.y;
	if(x - 5 < Screen.mouse.x && Screen.mouse.x < x + 5 + box.boxSize) {
		if(y - 5 < Screen.mouse.y && Screen.mouse.y < y + 5 + box.boxSize) {
			return true;
		}
	}
	else return false;
}

function addBox(xCoord, yCoord, size, array, drawer) {
	array.push(new box(xCoord - (size/2), yCoord - (size/2), size, drawer));
}

function buildInNodes(numberOfNodes, box) {
	var nodeArray = [];
	var spacing = (box.boxSize/(numberOfNodes*2));
	var j = 1;
	for(var i = 0; i < numberOfNodes; ++i) {
		nodeArray[i] = (new inputNode(spacing*(j), box));
		j+=2;
	}
	return nodeArray;
}

function buildOutNodes(numberOfNodes, box) {
	var nodeArray = [];
	var spacing = (box.boxSize/(numberOfNodes*2));
	var j = 1;
	for(var i = 0; i < numberOfNodes; ++i) {
		nodeArray[i] = (new outputNode(spacing*(j), box));
		j+=2;
	}
	return nodeArray;
}

function leftMouseNodeSelect(box) {
	var x = box.x+grid.x;
	var y = box.y+grid.y;
	var nodeCount = box.IN.length;
	var spacing = box.boxSize / nodeCount;

	if(x - 5 < Screen.mouse.x && Screen.mouse.x < x + 5 + box.boxSize) {
		for(var i = 0; i < nodeCount; ++i) {
			if(y+i*spacing < Screen.mouse.y && Screen.mouse.y <= y+(i+1)*spacing) {
				return i+1;
			}
		}
	}
}

function rightMouseNodeSelect(box) {
	var x = box.x+grid.x;
	var y = box.y+grid.y;
	var nodeCount = box.ON.length;
	var spacing = box.boxSize / nodeCount;

	if(x - 5 < Screen.mouse.x && Screen.mouse.x < x + 5 + box.boxSize) {
		for(var i = 0; i < nodeCount; ++i) {
			if(y+i*spacing < Screen.mouse.y && Screen.mouse.y <= y+(i+1)*spacing) {
				return i+1;
			}
		}
	}
}

function mouseIsOnLeft(box) {
	var x = box.x+grid.x;
	var y = box.y+grid.y;

	if(x - 5 < Screen.mouse.x && Screen.mouse.x < box.boxSize/2 + x) {
		return true;
	} else {
		return false;
	}
}

function nodeHighlighter(box, string) {
	if(mouseIsOnLeft(box)) {
		for(var j in box.ON) {
			box.ON[j].highlight = false;
		}
		for(var j in box.IN) {
			if(leftMouseNodeSelect(box)-1 == j) {
				if(box != this.firstBox) {
					box.IN[j].highlight = true;
				}
			} else {
				box.IN[j].highlight = false;
			}
		}
	} else {
		for(var j in box.IN) {
			box.IN[j].highlight = false;
		}
		for(var j in box.ON) {
			if(rightMouseNodeSelect(box)-1 == j) {
				if(box != this.firstBox) {
					box.ON[j].highlight = true;
				}
			} else {
				box.ON[j].highlight = false;
			}
		}
	}
}

function highlightedNode(box) {
	for(var i in box.IN) {
		if(box.IN[i].highlight) {
			return box.IN[i];
		}
	}
	for(var i in box.ON) {
		if(box.ON[i].highlight) {
			return box.ON[i];
		}
	}
}

function removeArrayItem(x, array) {
	console.log('what');
	for(var i = 0; i < array.length; ++i) {
		if(x == array[i]) {
			array.splice(i, 1);
			console.log('fu');
			return true;
		}
	}
	return false;
}