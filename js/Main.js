/*
-TODO

Add enemy
Add unwalkable tiles
Add basic attack system
Add xp system
Add UI for HP and Attack power

*/

const CANVAS_WIDTH = 512;
const CANVAS_HEIGHT = 448;
const FPS = 30;

var canvas, canvasContext;

var player = new playerClass();

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
	player.move();
}

function drawAll() {
	colorRect(0,0, canvas.width,canvas.height, 'black');
	drawLevel();
	player.draw();
}