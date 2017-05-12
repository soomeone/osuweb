<?php
if (isset($_GET["id"]) && isset($_GET["diff"]) && isset($_GET["map"])) {
    // Show map if selected
?>

<div id="text">asd</div><button onclick="start();">Dosomething</button>



<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<script src="scripts/scores.js"></script>
<script src="scripts/resources.js"></script>
<script src="scripts/sound.js"></script>
<script src="scripts/drawing.js"></script>
<script src="scripts/rendering.js"></script>
<script src="scripts/interface.js"></script>
<script src="scripts/cursor.js"></script>
<script src="scripts/input.js"></script>
<script src="scripts/init.js"></script>

<?php 
$args = "id=".$_GET["id"]. "&map=".$_GET["map"]."&diff=". $_GET["diff"]; 
?>
<script src="genscript.php?<?php echo $args; ?>"></script>


<style>
body {
    margin: 0;
    background-color: #111111;
    background-color: white;
}

canvas {
    margin: 0 auto;

    display: block;
    border-style: solid;
}


</style>



<?php
}
else {
    // If no map in url, show list
    $mapfolders = scandir("maps/");

    foreach ($mapfolders as $mapfolder) {
        if ($mapfolder === '.' or $mapfolder === '..') continue;

        if (is_dir("maps/".$mapfolder)) {
            //code to use if directory
            $foldercontent = scandir("maps/".$mapfolder);
            foreach ($foldercontent as $file) {
                if ($file === '.' or $file === '..') continue;
                 if (endsWith($file, ".osu")) {
                    // It's a map file
                    $folderargs = explode(" ", $mapfolder);
                    $mapargs = explode(".osu", $file)[0];
                    
                    $mapid = $folderargs[0];
                    $mapname = substr($mapfolder, strlen($mapid) + 1);
                    $mapdifficulty = substr($mapargs, strlen($mapname) + 1);

                    echo '<a href="?id='.$mapid.'&map='.$mapname.'&diff='.$mapdifficulty.'">'.$mapname." ".$mapdifficulty.'</a><br>';
                }
            }
        }
    }
}
// http://10.3.9.196/page.php?id=292083&map=Halozy - Deconstruction Star&diff=(Hollow Wings) [Beat Heaven]



function endsWith($haystack, $needle)
{
    $length = strlen($needle);
    if ($length == 0) {
        return true;
    }

    return (substr($haystack, -$length) === $needle);
}
?>