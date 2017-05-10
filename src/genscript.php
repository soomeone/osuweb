<?php
$counter = 1;

$file = fopen("123.oms", "r") or exit("Unable to open file!");
//Output a line of the file until the end is reached
while(!feof($file))
  {
  	// Every line
  	$line = fgets($file);
  	checkline(substr($line, 0, strlen($line) - 2));
  }
fclose($file);

// TMP hitsounds
echo 'addHitsound("sounds/drum-hitclap.wav");'.PHP_EOL;
echo 'addHitsound("sounds/drum-hitwhistle.wav");'.PHP_EOL;


function checkline($line) {
	global $counter;

		// If its a config thing (like filename)
		$args = explode(": ", $line);
		switch ($args[0]) {
			case "AudioFilename":
				$soundsrc = $args[1];
				// Echo the sound audio src
				echo 'setSong("sounds/'.$soundsrc.'");';
				break;

			case "CircleSize":
				$arg = $args[1];
				echo 'setCirclesize('.$arg.');';
				break;

			case "ApproachRate":
				$arg = $args[1];
				echo 'setApproachrate('.$arg.');';
				break;
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
				&& is_numeric($time)) {
				echo 'addCircle('.$posx.','.$posy.','.$counter.','.$time.');'.PHP_EOL;
				$counter++;
				if ($counter > 9)
					$counter = 1;
			}
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
		else if (count($args) == 3){
			if (strpos($args[2], '"') !== false) {
				$background = explode('"', $args[2])[1];
				echo 'setBackground("images/'.$background.'");'.PHP_EOL;
			}
		}
}
?>