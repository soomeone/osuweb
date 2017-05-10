/*
	Input output
*/
window.onkeydown = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;

   if (key == 89 || key == 88) {
       // X or Y pressed
   }
   if (key == 67) {
       // C for drawing
       startSmoke();
   }

   // console.log("Pressed key " + key);
}

window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;

   if (key == 67) {
       // C for drawing
       endSmoke();
   }

   // console.log("Released key " + key);
}