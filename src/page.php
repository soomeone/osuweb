<div id="text">asd</div><button onclick="start();">Dosomething</button>



<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

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

// http://10.3.9.196/page.php?id=292083&map=Halozy - Deconstruction Star&diff=(Hollow Wings) [Beat Heaven]

?>