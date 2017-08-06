<?php
	$k=false;
	foreach ($_POST as $key) {
		if(isset($key)){
			$k=true;
		}
	}
	if($k==true){
		echo "<pre>";
		print_r($_POST);
		echo "</pre>";
	}

	$fileget=file_get_contents('jsons/address.json');
	$array_data=json_decode($fileget);

	$array_data[0]=$_POST;

	$ara=json_encode($array_data);
	file_put_contents('jsons/address.json', $ara);

	header("Location: edit.php");

?>