// Function to translate numbers in pictures
function drawNumber(number, position, height, botalign, rightalign) {
	// Botalign means, texture is being positioned just to bottom
	this.widthpos = 0;
   	// Get every number
	this.tmpString = "" + number;

	// Rightalign adjustment
	this.leftpos = 0;
	if (rightalign) {
		for (b = 0; b < this.tmpString.length; b++) {
	    	this.texture = resources.numbertexture[b];
			this.width = texture.width / texture.height * height;
	   		this.leftpos -= (this.width);
	   	}
	   		this.leftpos -= 5;
	}
	// Draw it
	for (a = 0; a < this.tmpString.length; a++) {
	    this.n = parseInt(this.tmpString.charAt(a));
	    this.texture = resources.numbertexture[this.n];

	    // Re calculate sizes
	    this.height = height;
	    this.width = texture.width / texture.height * height;

	    // Botalign adjustment
		this.toppos = 0;
	    if (botalign)
	    	this.toppos = -this.height;

		context.drawImage(this.texture, (position.x + this.widthpos + this.leftpos), (position.y + this.toppos), this.width, this.height);
		this.widthpos += this.width;
	}
}

// Visible interface containing points, hp and more

function interface() {
    this.draw = function() {
    	// Draw numbers
    	drawNumber(combo, new position(10, canvas.height - 10), 40, true, false);
    	drawNumber(points, new position(canvas.width, 10), 20, false, true);

    	// Draw clickcounter
    	this.widthpos = canvas.width - (23) * 4;
    	for (x = 0; x < 4; x++) {
	    	if (clicked[x])
   		   		// If clicked, draw bright
	    		context.drawImage(resources.clickcounter_1, this.widthpos, canvas.height - 25, 20, 20);
	    	else
	    		// Else draw default
	    		context.drawImage(resources.clickcounter, this.widthpos, canvas.height - 25, 20, 20);

	    	drawText(clicks[x], "white", new position(this.widthpos + 5, canvas.height - 12), 10);
	    	this.widthpos += 22;
	    }
    }
}

interfaceelements.push(new interface());