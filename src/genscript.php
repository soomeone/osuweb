<?php
$counter = 1;

// Look for map id, name and difficulty
if (isset($_GET["id"]))
	$id = $_GET["id"];
else
	exit('alert("No map id specified");');


if (isset($_GET["map"]))
	$map = $_GET["map"];
else
	exit('alert("No map name specified");');


if (isset($_GET["diff"]))
	$difficulty = $_GET["diff"];
else
	exit('alert("No difficulty specified");');

// Compose filename
$directory = $id . " " . $map . DIRECTORY_SEPARATOR;
$filename = $directory . $map . " " . $difficulty . ".osu";
 
// echo 'alert("'.$filename.'");';

// Check if the map exists
if (!file_exists("maps/".$filename))
	exit('alert("Map not found");');


// Load file
$file = fopen("maps/" . $filename . "", "r") or exit('alert("Map not found");');
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
	global $directory;
	global $filename;

		// If its a config thing (like filename)
		$args = explode(": ", $line);
		switch ($args[0]) {
			case "AudioFilename":
				$soundsrc = $args[1];
				// Echo the sound audio src
				echo 'setSong("maps/'.$directory.$soundsrc.'");';
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

		// First check for background
		if (count($args) == 3 || count($args) == 5){
			if (strpos($args[2], '"') !== false) {
				$background = explode('"', $args[2])[1];
				echo 'setBackground("maps/'.$directory.$background.'");'.PHP_EOL;
			}
		}
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
}


function endsWith($haystack, $needle)
{
    $length = strlen($needle);
    if ($length == 0) {
        return true;
    }

    return (substr($haystack, -$length) === $needle);
}
?>