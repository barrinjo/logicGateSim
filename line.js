class line {
	constructor(firstNode, secondNode) {
		var full;
		if(secondNode.full) {
			full = secondNode.full
		} else {
			full = false;
		}
		drawable(this);
		this.Start = firstNode;
		if(secondNode.full) {
			realDeleteDrawable(this);
			delete(this);
		} else {
			this.Final = secondNode;
			if(secondNode.in) {
				secondNode.full = true;
			}
		}
		this.midpoint;
		this.boxSize = firstNode.boxSize;
		// secondNode.highlight = false;
	}
	draw() {
		Screen.stroke(255, 255*(this.Start.highlight || this.Final.highlight), 0);
		Screen.strokeWeight(3);
		this.midpoint = Math.abs(this.Start.x + this.Final.x)/2;
		Screen.curve([
			P(this.Start.x+grid.x, this.Start.y+grid.y+1),
			P(this.midpoint+grid.x, this.Start.y+grid.y+1),
			P(this.midpoint+grid.x, this.Final.y+grid.y+1),
			P(this.Final.x+grid.x, this.Final.y+grid.y+1)])
	}
}
class mouseLine extends line {
	constructor(firstNode, mouse) {
		super(firstNode, mouse);
		var n = {x: mouse.x, y: mouse.y};
		this.Final = n;
	}
	beginDraw() {
		this.Final.x = Screen.mouse.x - grid.x;
		this.Final.y = Screen.mouse.y - grid.y;
	}
}