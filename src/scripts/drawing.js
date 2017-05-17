var circlesize = 20;
setCirclesize(2);
var approachrate = 7;

function drawcircle(pos, size, approachsize, number) {
	// Draw circle with texture
	context.drawImage(resources.circletexture, pos.x - (size / 2), pos.y  - (size / 2), size, size);
	context.drawImage(resources.circleoverlaytexture, pos.x - (size / 2), pos.y  - (size / 2), size, size);

	// Draw circle border with texture
	this.size = (approachsize + size);
	this.startpoint = new position(pos.x - (this.size / 2), pos.y - (this.size / 2));
	context.drawImage(resources.approachcircletexture, this.startpoint.x, this.startpoint.y, this.size, this.size);
	
	// Draw number with texture
	context.drawImage(resources.numbertexture[number], pos.x - (size / 6 / 2), pos.y - (size / 4 / 2), size / 6, size / 4);
}


// A temporary function
function drawline(from, to) {
	context.beginPath();
	context.moveTo(from.x, from.y);
	context.lineTo(to.x, to.y);
	context.lineWidth = 20;
	context.strokeStyle = "gray";
	context.stroke();
	context.closePath();
}

function circle(posx, posy, number, time) {
	this.pos = translateposition(new position(posx, posy));
	this.time = time;
	this.duration = 300;

	this.hitted = false;

	this.time = time;


	this.draw = function(timeleft) {
		if (timeleft >= 0) {
			drawcircle(this.pos, circlesize, timeleft / 3, number);
		}
	}
}

function slider(posx, posy, number, time, type, positionpoints) {

	this.pos = translateposition(new position(posx, posy));
	this.endpos = positionpoints[positionpoints.length - 1];

	this.time = time;
	positionpoints.unshift(this.pos);

	this.bezier = new Bezier(positionpoints); // Only the beizer
	this.curve = this.bezier.getLUT(90); // Curve in the middle, where the textures are

	this.duration = 300;

	this.hitted = false;

	this.time = time;

	this.draw = function(timeleft) {
		if (timeleft >= 0) {
			for (z = 0; z < this.curve.length; z++){
				// Draw slider content (inner) texture
				context.drawImage(resources.slidertexture, this.curve[z].x - circlesize / 2, this.curve[z].y - circlesize / 2, circlesize, circlesize);
			}


			/* VERY EXPERIMENTAL (i'm working on it)
			for (z = 1; z < this.curve.length; z++){
				this.factor = z / this.curve.length;
				this.pt = this.bezier.get(this.factor); // The parameter have to be a number under 1 and over 0
				this.nv = this.bezier.normal(this.factor);

				this.x = this.pt.x + (circlesize / 2) * this.nv;
				this.y = this.pt.y + (circlesize / 2) * this.nv;
				
				// Draw slider left border
				if (z > 0)
					context.lineTo(this.x, this.y);
				else {
					context.moveTo(this.x, this.y); // Move to start of line
					context.beginPath();
				}
			}
			context.stroke();
			*/

			// Draw circle with texture at beginning and end
			if (timeleft - this.duration >= 0) 
				drawcircle(this.pos, circlesize, timeleft - this.duration, number);
			drawcircle(this.endpos, circlesize, timeleft - this.duration, number);
			
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