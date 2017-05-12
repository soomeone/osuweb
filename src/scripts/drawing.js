var circlesize = 20;
setCirclesize(2);
var approachrate = 7;

function circle(posx, posy, number, time) {
	this.pos = translateposition(new position(posx, posy));
	this.time = time;
	this.duration = 100;

	this.hitted = false;

	this.time = time;


	this.draw = function(timeleft) {
		if (timeleft >= 0) {
			
			// Draw circle with texture
			context.drawImage(resources.circletexture, this.pos.x - (circlesize / 2), this.pos.y  - (circlesize / 2), circlesize, circlesize);
			context.drawImage(resources.circleoverlaytexture, this.pos.x - (circlesize / 2), this.pos.y  - (circlesize / 2), circlesize, circlesize);

			// Draw circle border with texture
			this.size = (timeleft + circlesize);
			this.startpoint = new position(this.pos.x - (this.size / 2), this.pos.y - (this.size / 2));
			context.drawImage(resources.approachcircletexture, this.startpoint.x, this.startpoint.y, this.size, this.size);
			
			// Draw number with texture
			context.drawImage(resources.numbertexture[number], this.pos.x - (circlesize / 6 / 2), this.pos.y - (circlesize / 4 / 2), circlesize / 6, circlesize / 4);
		}
	}
}

function slider(posx, posy, number, time, type, positionpoints) {
	this.pos = translateposition(new position(posx, posy));
	this.time = time;
	this.positions = positionpoints;
	this.duration = 100;

	this.hitted = false;

	this.time = time;

	this.draw = function(timeleft) {
		if (timeleft >= 0) {
			// Draw circle with texture
			context.drawImage(resources.circletexture, this.pos.x - (circlesize / 2), this.pos.y  - (circlesize / 2), circlesize, circlesize);
			context.drawImage(resources.circleoverlaytexture, this.pos.x - (circlesize / 2), this.pos.y  - (circlesize / 2), circlesize, circlesize);
	
			// Draw circle border with texture
			this.size = (timeleft + circlesize);
			this.startpoint = new position(this.pos.x - (this.size / 2), this.pos.y - (this.size / 2));
			context.drawImage(resources.approachcircletexture, this.startpoint.x, this.startpoint.y, this.size, this.size);
			
			// Draw number with texture
			context.drawImage(resources.numbertexture[number], this.pos.x - (circlesize / 6 / 2), this.pos.y - (circlesize / 4 / 2), circlesize / 6, circlesize / 4);
			
		}
	}
}


// Idk why this is here
function drawproportional(image, position, height, width) {
	this.height = image.height / height * 100 * 2; // Here is a problem with the calculation. I dont get how this should be
	this.width = image.width / width * 100 * 2;
	context.drawImage(image, position.x - this.width / 2, position.y - this.height / 2, this.width, this.height);
}

function spinner(time, endtime) {
	// To do
	this.time = endtime; // == completed time, despawn
	this.duration = endtime - time; // For rendering

	this.hitted = false;
	this.fillment = 0;

	this.draw = function() {
		
		this.height = canvas.height - 100;
		this.width = this.height;

		// Draw circle with texture
		drawproportional(resources.spinnerbottom,  new position(canvas.width / 2, canvas.height / 2), this.width, this.height);
		drawproportional(resources.spinnertop,  new position(canvas.width / 2, canvas.height / 2), this.width, this.height);
		drawproportional(resources.spinnermiddle2,  new position(canvas.width / 2, canvas.height / 2), this.width, this.height);
		drawproportional(resources.spinnermiddle,  new position(canvas.width / 2, canvas.height / 2), this.width, this.height);

		context.drawImage(resources.spinnerspin, canvas.width / 2 - resources.spinnerspin.width / 2, canvas.height - resources.spinnerspin.height - 20);
	}
}

function setCirclesize(invertedsize) {
	circlesize = (7 - invertedsize) * 15;
	console.log("Cs is " + circlesize);
 }


 // Drawing function
 function drawText(text, color, position, size) {
 	context.beginPath();
	context.font = size + "px Calibri";
	context.fillStyle = color;
	context.fillText(text, position.x, position.y);
	context.closePath();
 }