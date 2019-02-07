var grid = {
	x: 0, y: 0,

	preX: 0, preY: 0,
	preMX: 0, preMY: 0,
	beginStep() {
		if(Screen.mouse.middle.pressed) {
			grid.preX = grid.x;
			grid.preY = grid.y;
			grid.preMX = Screen.mouse.x;
			grid.preMY = Screen.mouse.y;
		}
		if(Screen.mouse.middle.down) {
			grid.x = grid.preX - grid.preMX + Screen.mouse.x;
			grid.y = grid.preY - grid.preMY + Screen.mouse.y;
		}
	}
}
drawable(grid);