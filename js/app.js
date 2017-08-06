var myApp=angular.module('myApp',['ngRoute','controllerApp']);

// myApp.config(function($routeProvider,$locationProvider){
// 	$locationProvider.hashPrefix('');
// 	$routeProvider.
// 	when('/experience',{
// 		templateUrl:'partials/experience.htm',
// 		controller:'BiographyController',
// 	})
// 	.when('/education',{
// 		templateUrl:'partials/education.htm'
// 	})
// 	.when('/awards',{
// 		templateUrl:'partials/awards.htm',
// 		controller:'AwardsAndGrantsController'
// 	})
//     .when('/publication',{
// 	 	templateUrl:'partials/publications2017.htm',
// 	 	controller:'PublicationsController'
// 	})
// 	.when('/publications/2016',{
// 		templateUrl:'partials/publications2016.htm',
// 		controller:'PublicationsController'
// 	})
// 	.when('/publications/2015',{
// 		templateUrl:'partials/publications2015.htm',
// 		controller:'PublicationsController'
// 	})
// 	.when('/publications/2014',{
// 		templateUrl:'partials/publications2014.htm',
// 		controller:'PublicationsController'
// 	})
// 	.when('/courses-taught',{
// 	 	templateUrl:'partials/coursesTaught.htm',
// 	 	controller:'CoursesTaughtController'
// 	})
// 	.when('/researches',{
// 		templateUrl:'partials/currentResearch.htm',
// 		controller:'CurrentResearchController'
// 	})
// 	.otherwise({
// 		redirectTo: '/experience'
// 	})
// });


// var myApp=angular.module('myApp',['ngRoute','artistControllers']);
// myApp.config(function($routeProvider,$locationProvider){
// 	$locationProvider.hashPrefix('');
// 	$routeProvider.
// 	when('/list',{
// 		templateUrl:'partials/list.htm',
// 		controller: 'ListController'
// 	})
// 	.when('/details/:itemId',{
// 		templateUrl:'partials/details.htm',
// 		controller: 'DetailsController'
// 	})
// 	.otherwise({
// 		redirectTo: '/list'
// 	});
// });

// var app=angular.module('addressApp', []);
// app.controller('AddressController',['$scope','$http',function($scope,$http){
// 		$http({
//  		method:'GET',
//  		url:'jsons/address.json'
//  	}).then(function(success){
//  		$scope.addresses=success.data;
//  	}, function(error){

//  	});
// }]);

// angular.bootstrap(document.getElementById("address-module"), ['AddressController']);