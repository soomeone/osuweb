var clicks = [0,0,0,0]
var clicked = [false,false,false,false]
/*
	Input output
*/
window.onkeydown = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;

   if (key == 89) {
      // X Pressed
      if (!clicked[0]) {
        clicks[0]++;
        clicked[0] = true;
      }
   }
   else if (key == 88) {
      // Y pressed
      if (!clicked[1]) {
        clicks[1]++;
        clicked[1] = true;
      }
   }
   if (key == 67) {
       // C for drawing
       startSmoke();
   }

   // console.log("Pressed key " + key);
}

window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;

   if (key == 89) {
      // X Released
      clicked[0] = false;
   }
   else if (key == 88) {
      // Y Released
      clicked[1] = false;
   }
   if (key == 67) {
       // C for drawing
       endSmoke();
   }

   // console.log("Released key " + key);
}

// Mouse clicks
window.onmousedown = function(e) {
  var key = e.keyCode ? e.keyCode : e.which;

  if (key == 1) {
      // X Released
      clicked[2] = true;
      clicks[2]++;
  }
  else if (key == 3) {
      // Y Released
      clicked[3] = true;
      clicks[3]++;
  }

  return false; // Prevent drag&drop and right click
}

window.onmouseup = function(e) {
  var key = e.keyCode ? e.keyCode : e.which;

  if (key == 1) {
      // X Released
      clicked[2] = false;
  }
  else if (key == 3) {
      // Y Released
      clicked[3] = false;
  }
}