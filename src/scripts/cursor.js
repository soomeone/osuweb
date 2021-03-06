function cursor() {

    this.pos = new position(0,0);
    this.draw = function() {
        context.drawImage(resources.cursortexture, this.pos.x - (resources.cursortexture.width / 2), this.pos.y - (resources.cursortexture.height / 2));
        context.drawImage(resources.cursormiddletexture, this.pos.x - (resources.cursormiddletexture.width / 2), this.pos.y - (resources.cursormiddletexture.height / 2));
    }
}

// Smoke + events
function smoke() {
    this.path = [];

    this.draw = function() {
        for (c = 0; c < this.path.length; c++) {
            context.drawImage(resources.smoketexture, this.path[c].x - (resources.smoketexture.width / 2), this.path[c].y - (resources.smoketexture.height / 2), 10, 10);
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

// Cursor apply moved to interface, because of lag minimation
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