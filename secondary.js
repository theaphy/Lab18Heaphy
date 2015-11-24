// Tim Heaphy

var app = angular.module('magicStuff');

app.controller('secondary', function($scope, bigServ){
	$scope.valuable = bigServ.getInfo();
});