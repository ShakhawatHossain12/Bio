<?php
	session_start();
	if(isset($_POST["username"]) && isset($_POST["password"])){
		if($_POST["username"]=="apece" && $_POST["password"]=="apece"){
			// echo "<h1>You logged in successfully</h1>";
			$_SESSION["loggedin"]=1;
		}else{
			header("Location: http://localhost/Web Page - Copy/index.php");
			exit();
		}
	}else if($_SESSION["loggedin"]==1){

	}
	else{
		header("Location: http://localhost/Web Page - Copy/index.php");
		exit();
	}
?>
<!DOCTYPE html>
<html>
<head>
	<title>UPDATE</title>
	<meta charset="utf-8">
	<script type="text/javascript" src="js/angular.min.js"></script>
	<script type="text/javascript" src="js/angular-route.min.js"></script>
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<link rel="stylesheet" type="text/css" href="fonts/font-awesome/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap-theme.min.css">
	<link rel="stylesheet" type="text/css" href="css/update.css">

</head>
<body>
	<div class="container-fluid">
		<ul class="list-unstyled list-inline headers">
			<a href="index.php"><li>Home</li></a>
			<a href="#" id="addressUpdate" onclick="updateAddress()"><li>Address</li></a>
			<a href="#" id="biographyUpdate" onclick="updateAllInformation('biography.json','createBiography.php')"><li>Biography</li></a>
			<a href="#" id="educationUpdate" onclick="updateAllInformation('education.json','editEducation.php')"><li>Education</li></a>
			<a href="#" id="publicationUpdate" onclick="updateAllInformation('publications.json','editPublications.php')"><li>Publications</li></a>
			<a href="#" id="awardsUpdate" onclick="updateAllInformation('awardsAndGrants.json','editAwards.php')"><li>Awards And Grants</li></a>
			<a href="#" id="coursesUpdate" onclick="updateAllInformation('coursesTaught.json','editCourses.php')"><li>Courses Taught</li></a>
			<a href="#" id="researchesUpdate" onclick="updateAllInformation('currentResearch.json','editResearches.php')"><li>Current Researches</li></a>
			<a href="#" id="publicationYearUpdate" onclick="updateAllInformation('publicationYear.json','editPublicationYear.php')"><li>Publication Year</li></a>
		</ul>
		<br>
		<div id="crud">
			<?php 
				include('phpPartials/CRUDnav-3.php');
			?>
		</div>
		<div class="row">
		<div class="col-md-8" id="updateInformationDiv">
			
		</div>
		<div class="col-md-4" id="showInformationDiv">
			
		</div>
	</div>
	</div>
	







	<script type="text/javascript" src="js/editPage.js"></script>
	<script type="text/javascript" src="SignUpJS/updateAddressInformation.js"></script>
	<script type="text/javascript" src="SignUpJS/updateBiographyInformation.js"></script>
</body>
</html>
