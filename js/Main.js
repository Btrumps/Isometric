const CANVAS_WIDTH = 512;
const CANVAS_HEIGHT = 448;
const FPS = 30;

var canvas, canvasContext;

var ballX = 2;
var ballY = 10;
var ballXV = 5;
var ballYV = 4;

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	loadImages();
}

function imagesDoneLoadingSoStartGame() {
	document.addEventListener('keydown', keyDownHandler);
	document.addEventListener('keyup', keyUpHandler);
	canvas.addEventListener('mousedown', mousedownHandler);
	canvas.addEventListener('mouseup', mouseupHandler);
	canvas.addEventListener('mousemove', mouseMoveHandler);

	setInterval(updateAll, 1000/FPS);
}

function updateAll() {
	moveAll();
	drawAll();
}

function moveAll() {
	ballMove();
}

function drawAll() {
	colorRect(0,0, canvas.width,canvas.height, 'black');
	drawLevel();
	colorRect(pixelToIsoX(ballX, ballY), pixelToIsoY(ballX, ballY), 5,5, 'red');
	colorRect(ballX, ballY, 5, 5, 'yellow');
}

function ballMove() {
	ballX += ballXV;
	ballY += ballYV;

	var boundX = LEVEL_COLS * GRID_DIM;
	var boundY = LEVEL_ROWS * GRID_DIM;

	if (ballX > boundX) {
		ballXV *= -1;
		ballX += ballXV;
		ballY += ballYV;
	}

	if (ballX < 0) {
		ballXV *= -1;
		ballX += ballXV;
		ballY += ballYV;
	}

	if (ballY > boundY) {
		ballYV *= -1;
		ballX += ballXV;
		ballY += ballYV;
	}

	if (ballY < 0) {
		ballYV *= -1;
		ballX += ballXV;
		ballY += ballYV;
	}


}
