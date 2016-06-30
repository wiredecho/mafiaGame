mafiaApp.controller('gamesController', function($scope, $location, playerFactory) {
	$scope.players = [];
	var votes = {};
	playerFactory.index(function(data) {
		$scope.players = data;
		for (var i=0; i<$scope.players.length; i++) {
			votes[$scope.players[i].name] = 0;
		}
	});
	$scope.vote = function(player) {
		votes[player.name] ++;
		console.log(countVotes(votes));
		return votes;
	}
	var countVotes = function(votes) {
		var most = 0;
		var mostPerson =[];
		for (var index in votes) {
			if (votes[index] > most) {
				most = votes[index];
				mostPerson.push(index);
			}
		}
		return mostPerson;	
	}
});