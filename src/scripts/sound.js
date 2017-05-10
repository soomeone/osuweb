// Song
var song;

function setSong(url) {
	song = new Audio(url);
	song.load();
}

function playSong() {
	song.play();
}

function getSongTime() {
	return Math.floor(song.currentTime * 1000);
}

// Hitsounds
var hitsounds = [];

function addHitsound(url) {
	hitsounds.push(url);
	console.log("Added sound " + url);
}

function playHitsound(number) {
	if (number >= hitsounds.length)
		number = 0;
	this.sound = new Audio(hitsounds[number]);
	this.sound.load();
	this.sound.play();
	console.log("played hitsound");
}