class box {
	constructor(initX, initY, size, drawer, numberofIN, numberofON) {
		drawable(this);
		this.INNN = numberofIN;
		this.ONNN = numberofON;
		this.x = initX;
		this.y = initY;
		this.mouseX;
		this.mouseY;
		this.dragging;
		this.exists = true;
		this.line = [];
		this.boxSize = size+(Math.max(this.INNN, this.ONNN)*10);
		this.IN = buildInNodes(this.INNN, this);
		this.ON = buildOutNodes(this.ONNN, this);
		this.drawer = drawer;
	}
	step() {
		nodeHighlighter(this, "highlight");
		if(mouseIsInBox(this) && Screen.mouse.left.pressed) {
			this.mouseX = Screen.mouse.x;
			this.mouseY = Screen.mouse.y;
			this.dragging = true;
		}
		if(this.dragging && Screen.mouse.left.down) {
			var changeX = this.mouseX - Screen.mouse.x;
			var changeY = this.mouseY - Screen.mouse.y;
			this.x -= changeX;
			this.y -= changeY;
			this.mouseX = Screen.mouse.x;
			this.mouseY = Screen.mouse.y;
		}
		if(Screen.mouse.left.released) {
			this.dragging = false;
		}
		if(Screen.mouse.middle.pressed && mouseIsInBox(this)) {
			console.log(removeArrayItem(this, this.drawer.boxArray));
			realDeleteDrawable(this);
			for(var i in this.ON) {
				realDeleteDrawable(this.ON[i]);
				delete this.ON[i]
			}
			for(var i in this.IN) {
				realDeleteDrawable(this.IN[i]);
				delete this.IN[i]
			}
			this.exists = false;
			delete this;
			delete this.ON;
			for(var i in this.line) {
				realDeleteDrawable(this.line[i]);
				delete this.line[i];
			}
		}
	}
	endDraw() {
		Screen.fill(0, 0, 0);
		Screen.stroke(255, 0, 0);
		Screen.strokeWeight(4);
		Screen.rect(this.x+grid.x, this.y+grid.y, this.boxSize, this.boxSize);

		if(mouseIsInBox(this)) {
			// Screen.fill(255, 0, 0);
			// Screen.rect(this.x, this.y, 30, 30);
		}
	}
}