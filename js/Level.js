const TILE_WIDTH = 80;
const TILE_HEIGHT = 40;
const LEVEL_COLS = 10;
const LEVEL_ROWS = 10;

const GRID_DIM = 100; // game size for tile

const BOUND_X = LEVEL_COLS * GRID_DIM;
const BOUND_Y = LEVEL_ROWS * GRID_DIM;


var levelGrid = [0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0];

const LEVEL_GRASS = 0;

var camPanX = 350;
var camPanY = 60;

function drawLevel() {

	for (var eachRow = 0; eachRow < LEVEL_ROWS; eachRow++) {
		for (var eachCol = 0; eachCol < LEVEL_COLS; eachCol++) {

			var tileX = tileCoordToIsoX(eachCol, eachRow);
			var tileY = tileCoordToIsoY(eachCol, eachRow);
			var levelIndex = colRowToArrayIndex(eachCol, eachRow);
			var tileTypeToPlace = levelGrid[levelIndex];

			switch (tileTypeToPlace) {

				case LEVEL_GRASS:
					drawImage(grassTile, tileX, tileY);
					colorText(eachCol + ', ' + eachRow, tileX + (TILE_WIDTH / 2), tileY + (TILE_HEIGHT / 2), 'red');
					break;

			}
			if (levelIndex == selectedMouseIndex) {
				colorRect(tileX + (TILE_WIDTH / 2), tileY + (TILE_HEIGHT / 2), 5,5, 'yellow');
			}
		}
	}
	colorText(selectedMouseIndex, 25, 25, 'yellow');
	// var testIsoX = pixelToIsoX(mouseX, mouseY);
	// var testIsoY = pixelToIsoY(mouseX, mouseY);
	// colorRect(testIsoX, testIsoY, 2, 2, 'red');
}

function tileCoordToIsoX(col, row) {
	return col * (TILE_WIDTH / 2) - (row * (TILE_WIDTH / 2)) + camPanX;
}

function tileCoordToIsoY(col, row) {
	return row * (TILE_HEIGHT / 2) + (col * (TILE_HEIGHT / 2)) + camPanY;
}

function pixelToIsoX(x, y) {
	return (x / GRID_DIM)  * (TILE_WIDTH / 2) - ((y / GRID_DIM) * (TILE_WIDTH / 2)) + camPanX + (TILE_WIDTH / 2); // half a tile at the end to align to top center of tile
}

function pixelToIsoY(x, y) {
	return (y / GRID_DIM) * (TILE_HEIGHT / 2) + ((x / GRID_DIM) * (TILE_HEIGHT / 2)) + camPanY;
}

function screenToWorldX(x, y) {
	var offsetX = (x - camPanX - (TILE_WIDTH / 2)) / 2;
	var offsetY = (y - camPanY);
	return ((offsetX / (TILE_WIDTH / 2)) * GRID_DIM) + ((offsetY / (TILE_WIDTH / 2)) * GRID_DIM);
}

function screenToWorldY(x, y) {
	var offsetX = (x - camPanX - (TILE_WIDTH / 2)) / 2;
	var offsetY = (y - camPanY);
	return ((offsetY / (TILE_HEIGHT / 2)) * GRID_DIM - ((offsetX / (TILE_HEIGHT / 2)) * GRID_DIM)) / 2;
}

