<?php

$file = fopen("123.oms", "r") or exit("Unable to open file!");
//Output a line of the file until the end is reached
while(!feof($file))
  {
  	// Every line
  	$line = fgets($file);
  	checkline(substr($line, 0, strlen($line) - 2));
  }
fclose($file);

// At the end, write "start" to start the map
echo "start();";


function checkline($line) {

		// If its a config thing (like filename)
		$args = explode(": ", $line);
		if ($args[0] == "AudioFilename"){
			$soundsrc = $args[1];
			// Echo the sound audio src
			echo 'setSound("http://127.0.0.1/'.$soundsrc.'");';
		}

		// If its a circle or slider
		$args = explode(",", $line);
		if (count($args) >= 4 && count($args) <= 6) {
			// Circle
			$posx = $args[0];
			$posy = $args[1];
			$time = $args[2];

			if (is_numeric($posx)
				&& is_numeric($posy)
				&& is_numeric($time))
				echo 'addCircle('.$posx.','.$posy.',1,'.$time.');'.PHP_EOL;
		}
		else if (count($args) >= 8 && count($args) <= 8){
			// Slider
			$posx = $args[0];
			$posy = $args[1];
			$time = $args[2];

			$positions = substr($args[5], 1);

			if (is_numeric($posx)
				&& is_numeric($posy)
				&& is_numeric($time))
				echo 'addSlider('.$posx.','.$posy.',4, "'.$positions.'",1,'.$time.');'.PHP_EOL;
		}
}
?>