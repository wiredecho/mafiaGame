mafiaApp.controller('newPlayersController', function($scope, $location, playerFactory) {
	$scope.addPlayer = function(newPlayer) {
		playerFactory.add(newPlayer, function(players) {
			$scope.newPlayer = {};
			$location.path('/waitingPage');
		})
	}
});