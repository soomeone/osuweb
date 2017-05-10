function loadImage(url) {
	this.img = new Image();
	this.img.src = url;
	return img;
}

var circlesize = 20;
setCirclesize(2);
var approachrate = 7;

var circletexture = loadImage("images/hitcircle.png");
var circleoverlaytexture = loadImage("images/hitcircleoverlay.png");
var approachcircletexture = loadImage("images/approachcircle.png");
var numbertexture = [loadImage("images/default-1.png"), loadImage("images/default-2.png"), loadImage("images/default-3.png"), loadImage("images/default-4.png"), loadImage("images/default-5.png"), loadImage("images/default-6.png"), loadImage("images/default-6.png"), loadImage("images/default-7.png"), loadImage("images/default-8.png"), loadImage("images/default-9.png")];

function circle(posx, posy, number, time) {
	this.pos = translateposition(new position(posx, posy));
	this.time = time;
	this.color = "red";

	this.hitted = false;

	this.time = time;


	this.draw = function(timeleft) {
		if (timeleft >= 0) {
			// Draw circle
			if (false) {
				// Only one color
				context.beginPath();
				context.arc(this.pos.x, this.pos.y, circlesize, 0, 20*Math.PI);
				context.lineWidth = 4;
				context.fillStyle = "#AACCCC";
				context.fill();
				context.closePath();
			}
			else {
				// Draw circle with texture
				context.drawImage(circletexture, this.pos.x - (circlesize / 2), this.pos.y  - (circlesize / 2), circlesize, circlesize);
				context.drawImage(circleoverlaytexture, this.pos.x - (circlesize / 2), this.pos.y  - (circlesize / 2), circlesize, circlesize);
			}

			// Draw border
			if (false) {
				context.beginPath();
				context.arc(this.pos.x, this.pos.y, (timeleft + circlesize), 0, 20 *Math.PI);
				context.strokeStyle = "black";
				context.stroke();
				context.closePath();
			}
			else {
				// Draw circle border with texture
				this.size = (timeleft + circlesize);
				this.startpoint = new position(this.pos.x - (this.size / 2), this.pos.y - (this.size / 2));
				context.drawImage(approachcircletexture, this.startpoint.x, this.startpoint.y, this.size, this.size);
			}
			

			// Draw number
			if (false) {
				// Draw raw number with font
				context.beginPath();
				context.font="40px Georgia";
				context.fillStyle="#CCAACC";
				context.fillText(number, this.pos.x - 10, this.pos.y + 10);
				context.closePath();
			}
			else {
				// Draw number with texture
				context.drawImage(numbertexture[number], this.pos.x - (circlesize / 6 / 2), this.pos.y - (circlesize / 4 / 2), circlesize / 6, circlesize / 4);
			}
		}
	}
}

function setCirclesize(invertedsize) {
	circlesize = (7 - invertedsize) * 20;
	console.log("Cs is " + circlesize);
 }