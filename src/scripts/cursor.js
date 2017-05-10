var cursortexture = loadImage("images/cursor.png");
var cursormiddletexture = loadImage("images/cursormiddle.png");
var smoketexture = loadImage("images/cursor-smoke.png");

function cursor() {

    this.pos = new position(0,0);
    this.draw = function() {
        context.drawImage(cursortexture, this.pos.x - (cursortexture.width / 2), this.pos.y - (cursortexture.height / 2));
        context.drawImage(cursormiddletexture, this.pos.x - (cursormiddletexture.width / 2), this.pos.y - (cursormiddletexture.height / 2));
    }
}

// Smoke + events
function smoke() {
    this.path = [];

    this.draw = function() {
        for (c = 0; c < this.path.length; c++) {
            console.log("drawed " + c);
            context.drawImage(smoketexture, this.path[c].x - (smoketexture.width / 2), this.path[c].y - (smoketexture.height / 2), 10, 10);
        }
   }
}

var smoking = false;
var smoke = new smoke();
interfaceelements.push(smoke);

function startSmoke() {
    smoking = true;
}

function endSmoke() {
    smoking = false;
}

function addSmoke(position) {
    smoke.path.push(position);
}

// Cursor apply
var cursor = new cursor();
interfaceelements.push(cursor);

// Get position
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}


// Change cursor
canvas.style.cursor = "none";
canvas.onmousemove = function(evt){
    var rect = canvas.getBoundingClientRect();

    cursor.pos.x = evt.clientX - rect.left;
    cursor.pos.y = evt.clientY - rect.top;

    if (smoking)
        addSmoke(new position(cursor.pos.x, cursor.pos.y));
};