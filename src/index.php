<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<link href="https://fonts.googleapis.com/css?family=Exo+2" rel="stylesheet">

<?php
if (isset($_GET["id"]) && isset($_GET["diff"]) && isset($_GET["map"])) {
    // Show map if selected
?>


<button onclick="start();" style="margin: 0 auto;">Start</button>


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
 $skin = "";
 if (isset($_GET["skin"]))
     $skin = "&skin=".$_GET["skin"];

$args = "id=".$_GET["id"]. "&map=".$_GET["map"]."&diff=". $_GET["diff"].$skin; 
?>
<script src="genscript.php?<?php echo $args; ?>"></script>


<style>
body {
    margin: 0;
    background-color: #111111;
    
    font-family: 'Exo 2', sans-serif;
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

            $difficultieshtml = "";

            foreach ($foldercontent as $file) {
                if ($file === '.' or $file === '..') continue;
                 if (endsWith($file, ".osu")) {
                    // It's a map file
                    $folderargs = explode(" ", $mapfolder);
                    $mapargs = explode(".osu", $file)[0];
                    
                    $mapid = $folderargs[0];
                    $mapname = substr($mapfolder, strlen($mapid) + 1);
                    $mapdifficulty = substr($mapargs, strlen($mapname) + 1);

                    $difficultieshtml .= '<a class="difficulty" href="?id='.$mapid.'&map='.$mapname.'&diff='.$mapdifficulty.'&skin=miraie">'.$mapdifficulty.'</a>';
                }
            }

            echo '<div class="map"><div class="splash"><div class="title">'.$mapname.'</div><img src="maps/'.$mapid." ".$mapname.'/defaultbackground.jpg" /></div><div class="list">'.$difficultieshtml.'</div> </div>';
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



<style>

body {
    margin: 0;
    font-family: 'Exo 2', sans-serif;

    background-image: url(page-dark.png);
    background-repeat: repeat;
}

/* map sections */
.map {
    margin: 30px auto;

    width: 500px;
    min-height: 200px;

    background-color: white;
    border-radius: 5px;

    box-sizing: border-box;
    overflow: hidden;

/*
    border-style: solid; 
    border-color: white;
    border-width: 4px;
*/
}

.map .splash {
    display: block;
    width: 100%;
    height: 150px;

    position: relative;

    box-sizing: border-box;
    overflow: hidden;
}

.map .splash img {
    display: block;
    width: 100%;

    z-index: -1;
    transition: all 0.3s;
}

.map:hover > .splash img {
    transform: scale(1.03);
}

.map .splash .title {
    font-size: 1.8em;
    position: absolute;

    padding: 10px 20px;
    z-index: 100;

    display: block;
    text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);
    color: white;

    cursor: default;
}

.map a {
    display: block;
    position: relative;
    color: black;
    text-decoration: none;
    font-family: inherit;

    margin: 5px 0;

    transition: all 0.2s;
}

.map a:hover {
    color: gray;
}

.map .list {
    padding: 10px 20px;
}


</style>