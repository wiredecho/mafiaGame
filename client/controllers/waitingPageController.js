mafiaApp.controller('waitingPageController', function($scope, $location, playerFactory) {
	$scope.players = [];
	playerFactory.index(function(data) {
		$scope.players = data;
	});
});