<!DOCTYPE html>
<html ng-app="myApp">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Dr. Mohammad Abdul Alim</title>
	<!-- <script type="text/javascript" src="js/angular.min.js"></script> -->
	<!-- <script type="text/javascript" src="js/angular-route.min.js"></script> -->
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<!-- <script type="text/javascript" src="js/script.js"></script> -->
	<script type="text/javascript" src="js/app.js"></script>
	<!-- <script type="text/javascript" src="js/signIn.js"></script> -->
	<script type="text/javascript" src="js/controllers.js"></script>
	<link rel="stylesheet" type="text/css" href="fonts/font-awesome/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
	<div class="container profile">
	<a href="#" class="sign-in">Sign in</a>
		<div class="row">
			<div id="address-module" class="col-md-4 profile-info">
				<img src="css/image1.jpg" class="profile-image img-responsive rounded-center">
				<address class="profile-address">
				<span class="profile-name" id="profile-name"></span><br>
				<p id="profile-rank"></p>
				<p id="profile-department"></p>
				<p id="profile-institution"></p>
				<p id="profile-m">Mobile: </p>
				<p id="profile-email">
					Email: 
				</p>
				<!-- <a href="mailto: mohammad.abdulalim.1981@ieee.org"> mohammad.abdulalim.1981@ieee.org</a><br> -->
				<p id="profile-title"></p>
		</address>
			</div>
			<div class="col-md-8 information-column">
				<ul class="list-unstyled list-inline information">
					<a href="#/experience"><li class="list-inline-item btn border-bottom-none" onclick="getBiography()">Biography</li></a>
					<li class="list-inline-item btn btn-info" id="publications">Publications<ul class="list-unstyled" id="publications-ul">
						
					</ul></li>
					<a href="#/courses-taught"><li class="list-inline-item btn btn-info" onclick="getCoursesTaught()">Courses Taught</li></a>
					<a href="#/awards"><li class="list-inline-item btn btn-info" onclick="getAwards()">Awards & Grants</li></a>
					<a href="#/researches"><li class="list-inline-item btn btn-info" onclick="getResearches()">Current Researches</li></a>
				</ul>
				<br>
				<div class="descriptions text-justify" id="information-holder"></div>
			</div>
		</div>
	</div>
	<div class="container-fluid mobile-site">
		<div class="row mobile-profile">
				<div class="col-xs-5"><img src="css/image1.jpg" class="profile-image img-responsive rounded-center"></div>
				<div class="col-xs-7"><address class="profile-address">
				<span class="profile-name">Dr. Mohammad Abdul Alim</span><br>
				Associate Professor<br>
				Dept. of Applied Physics, Electronics & Communication Engineering,<br>
				University of Chittagong, Bangladesh<br>
				Mobile: +8801775822146<br>
				<a href="mailto: mohammadabdulalim@cu.ac.bd">Email: mohammadabdulalim@cu.ac.bd</a><br>
				MIEEE, MIET, MIEEE-EDS, MIEEE-MTTS<br>
		</address></div>
		<p style="text-align: center;"><a href="#" class="sign-in-mobile">Sign in</a></p>
		</div>
		<br>
		<div class="col-sm-12 mobile-info">
			<ul class="list-unstyled list-inline information">
					<a href="#/experience"><li class="list-inline-item btn border-bottom-none">Biography</li></a>
					<a href="#/awards"><li class="list-inline-item btn btn-info">Awards & Grants</li></a>
					<li class="list-inline-item btn btn-info" id="publication">Publications<ul class="list-unstyled">
						<a href="#/publications/2017"><li class=" btn btn-info">2017</li></a>
						<a href="#/publications/2016"><li class=" btn btn-info">2016</li></a>
						<a href="#/publications/2015"><li class=" btn btn-info">2015</li></a>
						<a href="#/publications/2014"><li class=" btn btn-info">2014</li></a>
						<!-- <a href="#/publications/2012"><li class=" btn btn-info">2012</li></a> -->
					</ul></li>
					<a href="#/researches"><li class="list-inline-item btn btn-info">Current Researches</li></a>
				</ul>
				<br>
				<div class="descriptions text-justify" ng-view></div>
		</div>
	</div>
	<script type="text/javascript" src="js/publicationLoader.js"></script>
	<script type="text/javascript" src="js/addressLoader.js"></script>
	<script type="text/javascript" src="js/script.js"></script>
	<script type="text/javascript" src="js/signIn.js"></script>
</body>
</html>