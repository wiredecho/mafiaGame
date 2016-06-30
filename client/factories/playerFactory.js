var mafiaApp = angular.module('mafiaApp', ['ngRoute']);

mafiaApp.factory('playerFactory', function($http) {
	var factory = {};
	var players = [];
	factory.index = function(callback) {
		$http.get('/players').success(function(output) {
			players = output;
			callback(players);
		});
	}
	factory.add = function(newPlayer, callback) {
		$http.post('/players', newPlayer).then(function(output) {
			players.push(output.data);
			callback(players);
		});
	}
	return factory;
});