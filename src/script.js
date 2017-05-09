var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var audio = new Audio('');

function circle(posx, posy, number, time) {
	this.pos = translateposition(new position(posx, posy));
	this.time = time;
	this.color = "red";

	this.hitted = false;

	this.time = time;
	this.circlesize = 40;


	this.draw = function(timeleft) {
		if (timeleft >= 0) {
			// Draw circle
			ctx.beginPath();
			ctx.arc(this.pos.x, this.pos.y, this.circlesize, 0, 20*Math.PI);
	      	ctx.lineWidth = 4;
			ctx.fillStyle = "#AACCCC";
	      	ctx.fill();
	      	ctx.closePath();

			// Draw border
			
			ctx.beginPath();
			ctx.arc(this.pos.x, this.pos.y, (timeleft + this.circlesize), 0, 20 *Math.PI);
			ctx.strokeStyle = "black";
			ctx.stroke();
			ctx.closePath();
			

			// Draw number
			ctx.beginPath();
			ctx.font="40px Georgia";
			ctx.fillStyle="#CCAACC";
			ctx.fillText(number, this.pos.x - 10, this.pos.y + 10);
			ctx.closePath();
		}
	}
}

function slider(posx, posy, duration, positions, number, time) {
	this.pos = translateposition(new position(posx, posy));
	
	this.curves = [];

	this.time = time;
	this.color = "red";

	this.hitted = false;

	this.time = time;
	this.circlesize = 40;

	// Fill curves array
	var a = positions.split("|");
	var curves = this.curves;
	a.forEach(function (value, index, ar) {
		var args = value.split(":");
		var x = args[0];
		var y = args[1];



		curves.push("asd");
	});


	this.draw = function(timeleft) {
		if (timeleft >= 0) {
			// Draw circle
			ctx.beginPath();
			ctx.arc(this.pos.x, this.pos.y, this.circlesize, 0, 20*Math.PI);
	      	ctx.lineWidth = 4;
			ctx.fillStyle = "#AACCCC";
	      	ctx.fill();
	      	ctx.closePath();

	      	// Draw slider line TEMP
	      	var lastpos = this.pos;
	      	var curves = this.curves;
	      	curves.forEach(function (value, index, ar) {
		      	ctx.beginPath();
		      	ctx.moveTo(lastpos.x, lastpos.y);
				ctx.lineTo(value.x, value.y);
				ctx.strokeStyle = "black";
				ctx.stroke();
				ctx.closePath();
				lastpos = value;
			});

			// Draw border
			
			ctx.beginPath();
			ctx.arc(this.pos.x, this.pos.y, (timeleft + this.circlesize), 0, 20 *Math.PI);
			ctx.strokeStyle = "black";
			ctx.stroke();
			ctx.closePath();
			

			// Draw number
			ctx.beginPath();
			ctx.font="40px Georgia";
			ctx.fillStyle="#CCAACC";
			ctx.fillText(number, this.pos.x - 10, this.pos.y + 10);
			ctx.closePath();
		}
	}
}

function translateposition(pos) {
	// Resize the relative position from 640x480 to the canvas size
	pos.x = pos.x / 640 * canvas.width
	pos.y = pos.y / 480 * canvas.height;
	return pos;
}

function position(x, y) {
	this.x = x;
	this.y = y;
}

var spawnedobjects = [];

var ar = 1; // Approach rate

function update() {
	// Clear field for redraw
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// Draw every object
	spawnedobjects.forEach(function (value, index, ar) {
		var timeleft = value.time - currenttime;
		if (timeleft < (1000) && timeleft >= 0 && !value.hitted) {
			value.draw(timeleft);
		}

		else if (timeleft < 0 && !value.hitted) {
			// Auto hit elements
			value.hitted = true;
			hit(1);
		}
	});
}


setInterval(update, 1);


var currenttime = 0;
function timer() {
	currenttime += 5;
	document.getElementById("text").innerHTML = currenttime;
}

var timer;
var syncer;

function start() {
	timer = setInterval(timer, 5);
	syncer = setInterval(syncer, 100);
	audio.play();
}

// Sounds
var offset = 0; // Offset in ms
function syncer() {
	var canvastime = currenttime - offset;
	var audiotime = Math.round(audio.currentTime * 1000);

	if (!(audiotime + 10 > canvastime && audiotime - 10 < canvastime)){
		// Apply sync
		canvastime = audiotime + offset;
		console.log("Synched");
	}
	
	console.log(canvastime + " : " + audiotime);
}

// Hitsounds
var hitaudio = [new Audio("http://127.0.0.1/drum-hitclap.wav"), new Audio("http://127.0.0.1/drum-hitwhistle.wav"),new Audio("http://127.0.0.1/drum-hitclap.wav"), new Audio("http://127.0.0.1/drum-hitwhistle.wav"),new Audio("http://127.0.0.1/drum-hitclap.wav"), new Audio("http://127.0.0.1/drum-hitwhistle.wav")];
var last = 0;
function hit(sound){
	hitaudio[last].currentTime = 0;
	hitaudio[last].play();

	last++;
	if (last >= hitaudio.length)
		last = 0;
}

// External functions

function setSound(url) {
	audio = new Audio(url);
	audio.load();
}

function addCircle(posx, posy, number, time) {
	spawnedobjects.push(new circle(posx, posy, number, time));
	console.log("Added circle: " + posx + " " + posy + " " + number + " " + time);
}

function addSlider(posx, posy, duration, positions, number, time) {
	spawnedobjects.push(new slider(posx, posy, duration, positions, number, time));
	console.log("Added slider: " + posx + " " + posy + " " + number + " " + time);
} 

/*
	Input output
*/
window.onkeydown = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;

   if (key == 89 || key == 88) {
       // X or Y pressed
   }
}