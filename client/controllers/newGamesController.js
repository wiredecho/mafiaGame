mafiaApp.controller('newGamesController', function($scope, $location, playerFactory) {
	$scope.checkCode = function(code) {
		if(code == 'tacocat') {
			$location.path('/gameMaster');
		}
	}
});