const PLAYER_WIDTH = 10;
const PLAYER_HEIGHT = 35;

const GOAL_WIDTH = 5;
const GOAL_HEIGHT = 15;

const WALK_SPEED = 10;

function playerClass() {

	this.x = GRID_DIM * (LEVEL_COLS / 2);
	this.y = GRID_DIM * (LEVEL_ROWS / 2);
	this.velX = 0;
	this.velY = 0;

	this.goalX = this.x;
	this.goalY = this.y;

	this.move = function() {
		

		if (dist(this.x,this.y, this.goalX,this.goalY) > WALK_SPEED) {
			/*
			var angTo = Math.atan2(this.goalY - this.y, this.goalX - this.x);
			this.velX = Math.cos(angTo) * WALK_SPEED;
			this.velY = Math.sin(angTo) * WALK_SPEED;
			*/
			if (this.x < this.goalX - WALK_SPEED) {
				this.velX = WALK_SPEED;
			} else if (this.x > this.goalX + WALK_SPEED) {
				this.velX = -WALK_SPEED;
			} else {
				this.velX = 0;
				this.x = this.goalX;
			}

			if (this.y < this.goalY - WALK_SPEED) {
				this.velY = WALK_SPEED;
			} else if (this.y > this.goalY + WALK_SPEED) {
				this.velY = -WALK_SPEED;
			} else {
				this.velY = 0;
				this.y = this.goalY;
			}

			var speedNow = dist(0,0, this.velX,this.velY);
			
			if (speedNow > 0) {
				this.velX = Math.abs(this.velX / speedNow) * this.velX;
				this.velY = Math.abs(this.velY / speedNow) * this.velY;
				var speedNow = dist(0,0, this.velX,this.velY);
				console.log(speedNow);
			}
			 


		} else {
			this.velX = 0;
			this.velY = 0;
			this.x = this.goalX;
			this.y = this.goalY;
		}

		this.x += this.velX;
		this.y += this.velY;

		//this.x = this.goalX; //this.y = this.goalY;

		if (this.x > BOUND_X) {
			this.velX = 0;
			this.x = BOUND_X;
		}

		if (this.x < 0) {
			this.velX = 0;
			this.x = 0;
		}

		if (this.y > BOUND_Y) {
			this.velY = 0;
			this.y = BOUND_Y;
		}

		if (this.y < 0) {
			this.velY = 0;
			this.y = 0;
		}
	}

	this.draw = function() {
		colorRect(	pixelToIsoX(this.x, this.y) - PLAYER_WIDTH / 2,
					pixelToIsoY(this.x, this.y) - PLAYER_HEIGHT,
					PLAYER_WIDTH, PLAYER_HEIGHT, 'red');

		colorRect( 	pixelToIsoX(this.goalX, this.goalY) - GOAL_WIDTH / 2,
					pixelToIsoY(this.goalX, this.goalY) - GOAL_HEIGHT,
					GOAL_WIDTH, GOAL_HEIGHT, 'orange');
	}

}

function dist(x1,y1, x2,y2) {
	var xd = x2 - x1;
	var yd = y2 - y1;
	return Math.sqrt(xd * xd + yd * yd);
}