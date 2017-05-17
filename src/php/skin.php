<?php
// loadResources("skins/default/");
if (isset($_GET["skin"])) {
    loadResources("skins/".$_GET["skin"] ."/");
    echo 'console.log("loading '."skins/".$_GET["skin"] ."/".'");';
}
loadResources("maps/".$directory); // Load for specific song



function loadResources($folder) {
    // Get all the resources files
    $textures = array();

    
    // $textures["backgroundtexture"] = "defaultbackground.jpg";
    $textures["circleoverlaytexture"] = "hitcircleoverlay.png";
    $textures["approachcircletexture"] = "approachcircle.png";
    $textures["slidertexture"] = "slider.png"; // TMP!
    // $textures["numbertexture"] = "";

    $textures["spinnertop"] = "spinner-top.png";
    $textures["spinnerspin"] = "spinner-spin.png";
    $textures["spinnermiddle"] = "spinner-middle.png";
    $textures["spinnermiddle2"] = "spinner-middle2.png";
    $textures["spinnerglow"] = "spinner-glow.png";
    $textures["spinnerclear"] = "spinner-clear.png";
    $textures["spinnerbottom"] = "spinner-bottom.png";

    $textures["clickcounter"] = "clickcounter.png";
    $textures["clickcounter_1"] = "clickcounter_1.png";

    $textures["cursortexture"] = "cursor.png";
    $textures["cursormiddletexture"] = "cursormiddle.png";
    $textures["smoketexture"] = "cursor-smoke.png";


    $sounds = array();
    $sounds["combobreak"] = "combobreak.mp3";
    $sounds["sectionpass"] = "sectionpass.mp3";
    $sounds["sectionfail"] = "sectionfail.mp3";






    // Texture output
    foreach($textures AS $name => $path) {
        if (file_exists($folder . $path)) {
            echo "resources.$name = loadImage(\"$folder$path\");".PHP_EOL;
            echo 'console.log("Added '.$folder.$path.'");';
        }
    }

    // Sound output
    foreach($sounds AS $name => $path) {
        if (file_exists($folder . $path)) {
            echo "resources.$name = \"$folder$path\";".PHP_EOL;
            echo 'console.log("Added '.$folder.$path.'");';
        }
    }
}

// TMP hitsounds
echo PHP_EOL;
echo 'addHitsound("skins/default/drum-hitclap.wav");'.PHP_EOL;
echo 'addHitsound("skins/default/drum-hitwhistle.wav");'.PHP_EOL;
?>