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
}

function playHitsound() {
	new Audio(hitsound[0]).play();
}