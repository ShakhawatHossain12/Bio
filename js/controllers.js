var controllerApp=angular.module('controllerApp',[]);

controllerApp.controller('BiographyController',['$scope','$http',function($scope,$http){
	$http({
		method:'GET',
		url:'jsons/biography.json'
	}).then(function(success){
		$scope.bios=success.data;
	}
	, function(error){

	});
}]);
controllerApp.controller('EducationController',['$scope','$http',function($scope,$http){
	$http({
		method:'GET',
		url:'jsons/education.json'
	}).then(function(success){
		$scope.educations=success.data;
		//$scope.bioses=$scope.$parent.bios;
	}, function(error){

	});
}]);

controllerApp.controller('PublicationsController',['$scope','$http',function($scope,$http){
	$http({
		method:'GET',
		url:'jsons/publications.json'
	}).then(function(success){
		$scope.data=success.data;
	}, function(){

	});
}]);

controllerApp.controller('AwardsAndGrantsController',['$scope','$http',function($scope,$http){
	$http({
		method:'GET',
		url:'jsons/awardsAndGrants.json'
	}).then(function(success){
		$scope.grants=success.data;
	}, function(){

	});
}]);

controllerApp.controller('CurrentResearchController',['$scope','$http',function($scope,$http){
	$http({
		method:'GET',
		url:'jsons/currentResearch.json'
	}).then(function(success){
		$scope.researches=success.data;
	}, function(){

	});
}]);

controllerApp.controller('CoursesTaughtController',['$scope','$http',function($scope,$http){
	$http({
		method:'GET',
		url:'jsons/coursesTaught.json'
	}).then(function(success){
		$scope.courses=success.data;
	}, function(){

	});
}]);















