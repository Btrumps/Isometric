const TILE_WIDTH = 80;
const TILE_HEIGHT = 40;
const LEVEL_COLS = 10;
const LEVEL_ROWS = 10;

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


function drawLevel() {

	for (var eachRow = 0; eachRow < LEVEL_ROWS; eachRow++) {
		for (var eachCol = 0; eachCol < LEVEL_COLS; eachCol++) {

			var tileX = eachCol * TILE_WIDTH;
			var tileY = eachRow * TILE_HEIGHT;
			var levelIndex = colRowToArrayIndex(eachCol, eachRow);
			var tileTypeToPlace = levelGrid[levelIndex];

			switch (tileTypeToPlace) {

				case LEVEL_GRASS:
					drawImage(grassTile, tileX, tileY);
					break;

			}
		}
	}

	console.log('h');
}