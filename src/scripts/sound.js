// Song
var song;

function setSong(url) {
	resources.song = loadSound(url);
}

function playSong() {
	resources.song.play();
}

function getSongTime() {
	return Math.floor(resources.song.currentTime * 1000);
}

// Hitsounds
function addHitsound(url) {
	resources.hitsounds.push(url);
	console.log("Added sound " + url);
}

function playHitsound(number) {
	if (number >= resources.hitsounds.length)
		number = 0;
	this.sound = loadSound(resources.hitsounds[number]);
	this.sound.play();
}

function playMisssound() {
	this.sound = loadSound(resources.combobreak);
	this.sound.play();
}

function playSectionsound(passed) {
	if (passed)
		this.sound = loadSound(resources.sectionpass);
	else 
		this.sound = loadSound(resources.sectionfail);
	this.sound.play();
}