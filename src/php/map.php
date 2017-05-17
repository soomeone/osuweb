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


function checkline($line) {
	global $counter;
	global $directory;
	global $filename;

	//echo '<br>// '.$line. " -- "; // Tmp echo everything

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

				if (!file_exists("maps/'.$directory.'defaultbackground.jpg"))
					copy("maps/'.$directory.$background.'", "maps/'.$directory.'defaultbackground.jpg");
			}
		}
		// Check for break periods
		if (count($args) == 3){
			if ($args[0] == "2") {
				echo 'addSection(new section('.$args[1].','.$args[2].'));'.PHP_EOL;
			}
		}
		if (count($args) >= 4) {
			$posx = $args[0];
			$posy = $args[1];
			$time = $args[2];
			$type = $args[3];

			if ($type == 1) {
				// Circle
				echo 'addCircle('.$posx.','.$posy.','.$counter.','.$time.');'.PHP_EOL;
				$counter++;
				if ($counter > 9)
					$counter = 1;
			}
			if ($type == 8){
				// Spinner
				$endtime = $args[4];
				echo 'addSpinner('.$time.','.$endtime.');'.PHP_EOL;
			}

			if ($type == 2 || $type == 6) {
				// Slider
				$rawpositions = explode("|", $args[5]); // Temp variable
				$slidertype = $rawpositions[0];
				
				$positions = "[";

				for ($i = 1; $i < sizeof($rawpositions); $i++) {
					// Start at 1 because 0 is the type
					// extract slider data


					// Get positions
					$curves = explode(":", $rawpositions[$i]);
					$curvex = $curves[0];
					$curvey = $curves[1];

					// Add to js array
					if (isset($curvex) && isset($curvey)) {
						if ($i != 1) {
							// Add separator from the second object on
							$positions .= ",";
						}

						$positions .= "new position($curvex, $curvey)";
					}

				}
				$positions .= "]";

				// Print
				if (is_numeric($posx)
					&& is_numeric($posy)
					&& is_numeric($time)) { // This check is pretty unnecessary
					if ($positions != "[]") // Prevent strange sliders from being spawned
						echo PHP_EOL."addSlider($posx, $posy, $counter, $time, \"$slidertype\", $positions);".PHP_EOL;
				}
				
				// TEMP
				if ($counter > 9)
						$counter = 1;
			}
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