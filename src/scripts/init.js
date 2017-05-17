// Timing
var starttime = 0;
function getMillis() {
	return new Date().getTime() - starttime;
}

// START
function start() {
	playSong();
	startsections();
	// Initialize time
	starttime = new Date().getTime();
}


// External functions

function addCircle(posx, posy, number, time) {
	objects.push(new circle(posx, posy, number, time));
}

function addSlider(posx, posy, number, time, type, positionpoints) {
	objects.push(new slider(posx, posy, number, time, type, positionpoints));
}

function addSpinner(time, endtime) {
	objects.push(new spinner(time, endtime));
}