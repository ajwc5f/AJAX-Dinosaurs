<?php
	// To enable CORS:
	// header('Access-Control-Allow-Origin: *');
	
	$content = empty($_GET['content']) ? false : $_GET['content'];
	$format = empty($_GET['format']) ? false : $_GET['format'];
	
	$output = "Please specify what \"content\" you are interested in, either \"home\" or \"data\"<br>Example: webService.php<b>?content=home</b>";
	
	switch($content) {
		case 'home':
			$output = "<p>This web application provides information about dinosaurs.</p>";
			break;
		case 'data':
			if ($format == 'xml') {
				header('Content-type: text/xml');
				$output = file_get_contents('dinosaurs.xml');
			}
			else if ($format == 'json') {
				header('Content-type: application/json');
				$dinosaurs = array();
				$dinosaurs[] = array(
					"name" => "Staurikosaurus",
					"group" => "Saurischia",
					"diet" => "Carnivore",
					"period" => "Triassic"
				);
				$dinosaurs[] = array(
					"name" => "Diplodocus",
					"group" => "Saurischia",
					"diet" => "Herbivore",
					"period" => "Jurassic"
				);
				$dinosaurs[] = array(
					"name" => "Stegosaurus",
					"group" => "Ornithischia",
					"diet" => "Herbivore",
					"period" => "Jurassic"
				);
				$dinosaurs[] = array(
					"name" => "Tyrannosaurus",
					"group" => "Saurischia",
					"diet" => "Carnivore",
					"period" => "Cretaceous"
				);
				$output = json_encode($dinosaurs);
			}
			else {
				$output = "Please specify a data format of either \"xml\" or \"json\"<br>Example: webService.php?content=data<b>&format=xml</b>";
			}
			break;
	}
	
	print $output;
?>