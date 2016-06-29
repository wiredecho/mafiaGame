mafiaApp.factory('gmFactory', function($http){
	var io;
	var gameSocket;


	exports.initGame = function(sio, socket,sdb){
	    io = sio;
	    gameSocket = socket;
	    gameSocket.emit('connected', { message: "You are connected!" });

	    // Host Events
	    gameSocket.on('hostCreateNewGame', hostCreateNewGame);

	    // Player Events
	    gameSocket.on('playerJoinGame', playerJoinGame);
	}

	factory.createRoom = function(){
		var thisGameId = (Math.random() * 100000) | 0;
		this.emit('newGameCreated', {gameId: thisGameId, mySocketID: this.id});
		this.join(thisGameId.toString());
	} 
})