
// Timing
var starttime = 0;
function getMillis() {
	return new Date().getTime() - starttime;
}

// START
function start() {
	// playSong();
	// Initialize time
	starttime = new Date().getTime();
}


// External functions

function addCircle(posx, posy, number, time) {
	objects.push(new circle(posx, posy, number, time));
}

function addSlider(posx, posy, duration, positions, number, time) {
	objects.push(new circle(posx, posy, number, time));
}