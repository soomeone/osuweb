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
	backgroundtexture : loadImage("skins/default/defaultbackground.jpg"),
	
	circletexture : loadImage("skins/default/hitcircle.png"),
	circleoverlaytexture : loadImage("skins/default/hitcircleoverlay.png"),
	slidertexture : loadImage("skins/default/slider.png"),
	approachcircletexture : loadImage("skins/default/approachcircle.png"),
	numbertexture : [loadImage("skins/default/default-0.png"), loadImage("skins/default/default-1.png"), loadImage("skins/default/default-2.png"), loadImage("skins/default/default-3.png"), loadImage("skins/default/default-4.png"), loadImage("skins/default/default-5.png"), loadImage("skins/default/default-6.png"), loadImage("skins/default/default-6.png"), loadImage("skins/default/default-7.png"), loadImage("skins/default/default-8.png"), loadImage("skins/default/default-9.png")],

	spinnertop : loadImage("skins/default/spinner-top.png"),
	spinnerspin : loadImage("skins/default/spinner-spin.png"),
	spinnermiddle : loadImage("skins/default/spinner-middle.png"),
	spinnermiddle2 : loadImage("skins/default/spinner-middle2.png"),
	spinnerglow : loadImage("skins/default/spinner-glow.png"),
	spinnerclear : loadImage("skins/default/spinner-clear.png"),
	spinnerbottom : loadImage("skins/default/spinner-bottom.png"),

	clickcounter : loadImage("skins/default/clickcounter.png"),
	clickcounter_1 : loadImage("skins/default/clickcounter_1.png"),

	cursortexture : loadImage("skins/default/cursor.png"),
	cursormiddletexture : loadImage("skins/default/cursormiddle.png"),
	smoketexture : loadImage("skins/default/cursor-smoke.png"),

	// Sound
	song : null,
	hitsounds : [],
	combobreak : "skins/default/combobreak.mp3",

	sectionpass : "skins/default/sectionpass.mp3",
	sectionfail : "skins/default/sectionfail.mp3",
}