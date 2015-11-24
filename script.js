var app = angular.module('magicStuff', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when('/type', {
		controller:'primary',
		templateUrl: 'form.html'
	})
	$routeProvider.when('/show', {
		controller:'secondary',
		templateUrl: 'display.html'
	})
})

app.controller('primary', function($scope, bigServ){
	$scope.store = function(valu){
		bigServ.save(valu);
	}
	
	// $scope.hoverOne = function(thing){
	// 	$scope.message = "clickit";
	// }
})