class inputNode {
	constructor(offset, box) {
		drawable(this);
		this.box = box;
		this.offset = offset;
		this.x;
		this.y;
		this.full = false;
		this.highlight = false;
		this.in = true;
	}
	draw() {
		Screen.fill(0, 0, 0);
		Screen.stroke(255, 255*(this.highlight), 0)
		Screen.strokeWeight(2);
		this.x = this.box.x-6
		this.y = this.box.y+this.offset;
		Screen.rect(this.x+grid.x, this.y+grid.y, 6, 2);
	}
}