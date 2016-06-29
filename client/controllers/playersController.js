mafiaAppModule.controller('playersController', function($scope, playerFactory) {
	var IO = {
		$scope.init: function() {
			IO.socket = io.connect();
			IO.bindEvents();
		},
		$scope.bindEvents: function() {
			IO.socket.on('connected', IO.onConnected);
			IO.socket.on('playerJoinedRoom', IO.playerJoinedRoom);
		},
		$scope.onConnected: function(code) {
			App.mySocketId = code;
		},
		$scope.playerJoinedRoom: function(data) {
			// ?
		}

	}
});