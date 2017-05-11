function loadImage(url) {
	this.img = new Image();
	this.img.src = url;
	return img;
}

function loadSound(url) {
	this.sound = new Audio(url);
	this.sound.load();
	return this.sound;
}

var resources = {
	// Textures
	backgroundtexture : loadImage("images/defaultbackground.jpg"),
	
	circletexture : loadImage("images/hitcircle.png"),
	circleoverlaytexture : loadImage("images/hitcircleoverlay.png"),
	approachcircletexture : loadImage("images/approachcircle.png"),
	numbertexture : [loadImage("images/default-0.png"), loadImage("images/default-1.png"), loadImage("images/default-2.png"), loadImage("images/default-3.png"), loadImage("images/default-4.png"), loadImage("images/default-5.png"), loadImage("images/default-6.png"), loadImage("images/default-6.png"), loadImage("images/default-7.png"), loadImage("images/default-8.png"), loadImage("images/default-9.png")],

	clickcounter : loadImage("images/clickcounter.png"),
	clickcounter_1 : loadImage("images/clickcounter_1.png"),

	cursortexture : loadImage("images/cursor.png"),
	cursormiddletexture : loadImage("images/cursormiddle.png"),
	smoketexture : loadImage("images/cursor-smoke.png"),

	// Sound
	song : null,
	hitsounds : [],
}