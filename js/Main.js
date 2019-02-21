const CANVAS_WIDTH = 512;
const CANVAS_HEIGHT = 448;
const FPS = 30;

var canvas, canvasContext;

window.onload = function() {
	canvas = document.createElement('canvas');

	canvasContext = canvas.getContext('2d');

	setInterval(updateAll, 1000/FPS);

	document.addEventListener('keydown', keyDownHandler);
	document.addEventListener('keyup', keyUpHandler);
	canvas.addEventListener('mousedown', mousedownHandler);
	canvas.addEventListener('mouseup', mouseupHandler);
	canvas.addEventListener('mousemove', mouseMoveHandler);

}

function updateAll() {
	moveAll();
	drawAll();
}

function moveAll() {
	
}

function drawAll() {
	colorRect(0,0, canvas.width,canvas.height, 'red');
}