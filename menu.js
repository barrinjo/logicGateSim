class popupMenu {
	constructor(x, y, segHeight, w, segCount) {
		drawable(this);
		this.x = x;
		this.y = y;
		this.w = w;
		this.segHeight = segHeight;
		this.segCount = segCount;
		this.segmentArray = [];
		for(var i = 0; i < this.segCount; ++i) {
			this.segmentArray.push(new segment(
				x,
				y + i*segHeight,
				segHeight,
				w));
		}
	}
	step() {

	}
	draw() {

	}
}

class segment {
	constructor(x, y, h, w) {
		drawable(this);
		this.x = x;
		this.y = y;
		this.h = h;
		this.w = w;
	}
	step() {

	}
	draw() {
		Screen.fill(255, 255, 255);
		Screen.rect(this.x + grid.x, this.y + grid.y, this.h, this.w);
	}

}

new popupMenu(10, 10, 100, 150, 4);