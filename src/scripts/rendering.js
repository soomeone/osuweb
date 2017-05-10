// Canvas
var canvas = document.createElement("canvas");
canvas.width = 640;
canvas.height = 480;
var context = canvas.getContext("2d");
document.body.insertBefore(canvas, document.body.childNodes[0]);

// Objects that should be rendered
var objects = [];
var interfaceelements = [];
var background = loadImage("images/BG.png");

function setBackground(url) {
	background = loadImage(url);
	console.log("Background set to " + url);
}

function update() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.drawImage(background, 0, 0, canvas.width, canvas.height);

	for (i = 0; i < objects.length; i += 1) {
		this.time = objects[i].time - getMillis();
        if (time >= 0 && time < 300) {
            objects[i].draw(time);
        } 
		if (time <= 20 && time >= 0) {
			playHitsound(0);
		}
    }

	// Interface
	for (i = 0; i < interfaceelements.length; i += 1) {
		interfaceelements[i].draw();
    }
}

setInterval(update, 20);


function translateposition(pos) {
	// Resize the relative position from 640x480 to the canvas size
	pos.x = pos.x / 640 * canvas.width
	pos.y = pos.y / 480 * canvas.height;
	return pos;
}

function position(x, y) {
	// position class for simplifying parameters
	this.x = x;
	this.y = y;
}