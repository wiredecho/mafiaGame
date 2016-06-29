mafiaApp.controller('gmsController', function(gmFactory, $scope){
	var IO = {
		$scope.init = function(){
			IO.socket = io.connect();
			IO.bindEvents();
		}
		$scope.bindEvents = function(){
			IO.socket.on('connected', IO.connected);
			IO.socket.on('createRoom', IO.createRoom);
			IO.socket.on('joinRoom', IO.joinRoom);
		}
	}

	$scope.connected = function(){
		gmFactory.mySocketId = IO.socket.socket.sessionid;
	}

	$scope.createRoom = function(data){
		gmFactory.Host.gameInit(data);
	}

	// $scope.joinRoom = function(){
	// 	gmFactory[]
	// }

})