const KEY_HELD_TIME_MAX = 15;

const LEFT_CLICK = 1;

var keyHeld_Timer = KEY_HELD_TIME_MAX;
var keyHeld_DashTimer = KEY_HELD_TIME_MAX;

var mouseX;
var mouseY;
var selectedMouseIndex = 7;

var keyHeld_1 = false;
var keyHeld_2 = false;
var keyHeld_3 = false;
var keyHeld_4 = false;
var keyHeld_5 = false;
var keyHeld_6 = false;
var keyHeld_7 = false;
var keyHeld_8 = false;
var keyHeld_9 = false;
var keyHeld_0 = false;
var keyHeld_Minus = false;
var keyHeld_Equal = false;

var keyHeld_Q = false;
var keyHeld_W = false;
var keyHeld_E = false;
var keyHeld_R = false;
var keyHeld_T = false;
var keyHeld_Y = false;
var keyHeld_U = false;
var keyHeld_I = false;
var keyHeld_O = false;
var keyHeld_P = false;
var keyHeld_BracketLeft = false;
var keyHeld_BracketRight = false;

var keyHeld_A = false;
var keyHeld_S = false;
var keyHeld_D = false;
var keyHeld_F = false;
var keyHeld_G = false;
var keyHeld_H = false;
var keyHeld_J = false;
var keyHeld_K = false;
var keyHeld_L = false;
var keyHeld_Semicolon = false;
var keyHeld_Quote = false;

var keyHeld_Z = false;
var keyHeld_X = false;
var keyHeld_C = false;
var keyHeld_V = false;
var keyHeld_B = false;
var keyHeld_N = false;
var keyHeld_M = false;
var keyHeld_Comma = false;
var keyHeld_Period = false;
var keyHeld_Slash = false;

var keyHeld_ArrowUp = false;
var keyHeld_ArrowDown = false;
var keyHeld_ArrowLeft = false;
var keyHeld_ArrowRight = false;
var keyHeld_Enter = false;
var keyHeld_Space = false;
var keyHeld_Delete = false;

var keyHeld_Num1 = false;
var keyHeld_Num2 = false;
var keyHeld_Num3 = false;
var keyHeld_Num4 = false;
var keyHeld_Num5 = false;
var keyHeld_Num6 = false;
var keyHeld_Num7 = false;
var keyHeld_Num8 = false;
var keyHeld_Num9 = false;
var keyHeld_Num0 = false;
var keyHeld_Divide = false;
var keyHeld_Multiply = false;
var keyHeld_Subtract = false;
var keyHeld_Add = false;
var keyHeld_Decimal = false;

function keyDownHandler(evt) {
	setValuesForKey(evt, true);
}

function keyUpHandler(evt) {
	setValuesForKey(evt, false);
}

function mousedownHandler(evt) {
	var mouseWorldX = screenToWorldX(mouseX, mouseY);
	var mouseWorldY = screenToWorldY(mouseX, mouseY);
	
	var mouseWorldCol = Math.floor(mouseWorldX / GRID_DIM);
	var mouseWorldRow = Math.floor(mouseWorldY / GRID_DIM);

	selectedMouseIndex = colRowToArrayIndex(mouseWorldCol, mouseWorldRow);

	console.log(mouseWorldX + ', ' +
				mouseWorldY + ', ' +
				mouseWorldCol + ', ' +
				mouseWorldRow + ', ' +
				selectedMouseIndex);

	player.goalX = mouseWorldX;
	player.goalY = mouseWorldY;

	if (player.goalX > BOUND_X) {
		player.goalX = BOUND_X;
	}

	if (player.goalX < 0) {
		player.goalX = 0;
	}

	if (player.goalY > BOUND_Y) {
		player.goalY = BOUND_Y;
	}

	if (player.goalY < 0) {
		player.goalY = 0;
	}
}


function mouseupHandler(evt) {

}

function setValuesForKey(evt, value) {
	var keyUsedByGame = true;

	switch (evt.code) {

		case "Digit1":
			keyHeld_1 = value;
			break;
		case "Digit2":
			keyHeld_2 = value;
			break;
		case "Digit3":
			keyHeld_3 = value;
			break;
		case "Digit4":
			keyHeld_4 = value;
			break;
		case "Digit5":
			keyHeld_5 = value;
			break;
		case "Digit6":
			keyHeld_6 = value;
			break;
		case "Digit7":
			keyHeld_7 = value;
			break;
		case "Digit8":
			keyHeld_8 = value;
			break;
		case "Digit9":
			keyHeld_9 = value;
			break;
		case "Digit0":
			keyHeld_0 = value;
			break;
		case "Minus":
			keyHeld_Minus = value;
			break;
		case "Equal":
			keyHeld_Equal = value;
			break;

		case "KeyQ":
			keyHeld_Q = value;
			break;
		case "KeyW":
			keyHeld_W = value;
			break;
		case "KeyE":
			keyHeld_E = value;
			break;
		case "KeyR":
			break;
		case "KeyT":
			break;
		case "KeyY":
			keyHeld_Y = value;
			break;
		case "KeyU":
			keyHeld_U = value;
			break;
		case "KeyI":
			keyHeld_I = value;
			break;
		case "KeyO":
			keyHeld_O = value;
			break;
		case "KeyP":
			keyHeld_P = value;
			break;
		case "BracketLeft":
			keyHeld_BracketLeft = value;
			break;
		case "BracketRight":
			keyHeld_BracketRight = value;
			break;

		case "KeyA":
			keyHeld_A = value;
			break;
		case "KeyS":
			keyHeld_S = value;
			break;
		case "KeyD":
			
			break;
		case "KeyF":
			keyHeld_F = value;
			break;
		case "KeyG":
			
			break;
		case "KeyH":
			keyHeld_H = value;
			break;
		case "KeyJ":
			keyHeld_J = value;
			break;
		case "KeyK":
			keyHeld_K = value;
			break;
		case "KeyL":
			keyHeld_L = value;
			break;
		case "Semicolon":
			keyHeld_Semicolon = value;
			break;
		case "Quote":
			keyHeld_Quote = value;
			break;


		case "KeyZ":
			keyHeld_Z = value;
			break;
		case "KeyX":
			keyHeld_X = value;
			break;
		case "KeyC":
			keyHeld_C = value;
			break;
		case "KeyV":
			
			break;
		case "KeyB":
			
			break;
		case "KeyN":
			break;
		case "KeyM":

			break;
		case "Comma":
			keyHeld_Comma = value;
			break;
		case "Period":
			keyHeld_Period = value;
			break;
		case "Slash":
			keyHeld_Slash = value;
			break;


		case "ArrowUp":
			break;
		case "ArrowDown":
			keyHeld_ArrowDown = value;
			break;
		case "ArrowLeft":
			keyHeld_ArrowLeft = value;
			break;
		case "ArrowRight":
			keyHeld_ArrowRight = value;
			break;
		case "Enter":
			keyHeld_Enter = value;
			break;
		case "Space":
			keyHeld_Space = value;
			break;
		case "Delete":
			keyHeld_Delete = value;
			break;

		case "Numpad1":
			keyHeld_Num1 = value;
			break;
		case "Numpad2":
			keyHeld_Num2 = value;
			break;
		case "Numpad3":
			keyHeld_Num3 = value;
			break;
		case "Numpad4":
			keyHeld_Num4 = value;
			break;
		case "Numpad5":
			keyHeld_Num5 = value;
			break;
		case "Numpad6":
			keyHeld_Num6 = value;
			break;
		case "Numpad7":
			keyHeld_Num7 = value;
			break;
		case "Numpad8":
			keyHeld_Num8 = value;
			break;
		case "Numpad9":
			keyHeld_Num9 = value;
			break;
		case "Numpad0":
			keyHeld_Num0 = value;
			break;
		case "NumpadDivide":
			keyHeld_Divide = value;
			break;
		case "NumpadMultiply":
			keyHeld_Multiply = value;
			break;
		case "NumpadSubtract":
			keyHeld_Subtract = value;
			break;
		case "NumpadAdd":
			keyHeld_Add = value;
			break;
		case "NumpadDecimal":
			keyHeld_Decimal = value;
			break;

		default : 
			keyUsedByGame = false;
			break;
	}

	if (keyUsedByGame) {
		evt.preventDefault();
	}
}

function mouseMoveHandler(evt) {
	var rect = canvas.getBoundingClientRect();

	mouseX = (evt.clientX - rect.left);
	mouseY = (evt.clientY - rect.top);

}