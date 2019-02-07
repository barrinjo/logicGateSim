class drawer {
	constructor() {
		drawable(this);
		this.boxArray = [];
		this.clickCount = 0;
		this.lineStarted;
		this.firstBox;
		this.firstNode;
		this.currentLine;
	}
	step() {
		if(Screen.mouse.left.pressed) {
			for(var i in this.boxArray) {
				console.log(this.boxArray[i].x, this.boxArray[i].y);
			}
		}
		if(this.lineStarted == true) {
			if(Screen.mouse.middle.pressed) {	
				realDeleteDrawable(this.currentLine);
				delete(this.currentLine);
				this.lineStarted = false;
				return;
			}
		}
		if(Screen.mouse.left.pressed && this.lineStarted == true || Screen.mouse.right.pressed && this.clickCount != 0) {
			for(var i in this.boxArray) {
				if(mouseIsInBox(this.boxArray[i])) {
					if(this.lineStarted == true) {
						if(this.firstBox != this.boxArray[i]) {
							realDeleteDrawable(this.currentLine);
							delete(this.currentLine);
							this.currentLine = new line(this.firstNode, highlightedNode(this.boxArray[i]));
							this.firstBox.line.push(this.currentLine);
							this.boxArray[i].line.push(this.currentLine);
							this.lineStarted = false;
							this.firstBox = '';
							this.firstNode = ''
						}
					} else {
						this.firstBox = this.boxArray[i];
						this.lineStarted = true;
						this.firstNode = highlightedNode(this.boxArray[i])
						this.currentLine = new mouseLine(this.firstNode, Screen.mouse);
						return;
					}
				}
			}
			if(this.lineStarted == true) {
				realDeleteDrawable(this.currentLine);
				delete(this.currentLine);
				this.lineStarted = false;
			}
		}
		if(Screen.mouse.left.pressed && this.clickCount != 0) {
			for(var i in this.boxArray) {
				if(mouseIsInBox(this.boxArray[i])) {
					return;
				}
			}
			addBox(Screen.mouse.x-grid.x, Screen.mouse.y-grid.y, 10, this.boxArray, this, 2, 1);
			return;	
		}
		if(this.boxArray.length == 0 && Screen.mouse.left.pressed) {
			addBox(Screen.mouse.x-grid.x, Screen.mouse.y-grid.y, 10, this.boxArray, this, 2, 2);
			this.clickCount++;
		}
	}
}

new drawer();