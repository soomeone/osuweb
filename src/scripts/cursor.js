var cursortexture = loadImage("images/cursor.png");
var cursormiddletexture = loadImage("images/cursormiddle.png");

function cursor() {

    this.pos = new position(0,0);
    this.draw = function() {
        context.drawImage(cursortexture, this.pos.x - (cursortexture.width / 2), this.pos.y - (cursortexture.height / 2));
        context.drawImage(cursormiddletexture, this.pos.x - (cursormiddletexture.width / 2), this.pos.y - (cursormiddletexture.height / 2));
    }
}

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
};