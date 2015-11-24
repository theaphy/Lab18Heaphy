var app = angular.module('magicStuff');

app.factory('bigServ', function(){
	var storedType = "your stuff here";

	return {
		save: function(valu){
			storedType = valu;
		},
		getInfo: function(){
			return storedType;
		}
	};
});