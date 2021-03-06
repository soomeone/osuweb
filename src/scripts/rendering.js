// Canvas
var canvas = document.createElement("canvas");
canvas.width = 640;
canvas.height = 480;
var context = canvas.getContext("2d");
document.body.insertBefore(canvas, document.body.childNodes[0]);

// Prevent right click
canvas.oncontextmenu = function (e) {
    return false;
    // e.preventDefault();
};

// Objects that should be rendered
var objects = [];
var interfaceelements = [];

var dimming = 50; // WRONG PLACE, please find a better place to stay for me

function setBackground(url) {
	resources.backgroundtexture = loadImage(url);
	console.log("Background set to " + url);
}

function update() {
	// Black background
	context.fillStyle="black";
	context.fillRect(0,0,canvas.width, canvas.height);

	// Draw backgruond with dim value (opacity)
	context.globalAlpha = (100-dimming) / 100;
	context.drawImage(resources.backgroundtexture, 0, 0, canvas.width, canvas.height);
	context.globalAlpha = 1;

	for (i = 0; i < objects.length; i += 1) {
		this.time = objects[i].time - getMillis();
        if (time >= 0 && time < objects[i].duration) {
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


    // Refresh
    requestAnimationFrame(update);
}

// Start the renderer
if (typeof(requestAnimationFrame) === typeof(Function))
	// If requestAnimationFrame supported
	update();
else
	// Do normal setinterval if not supported
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