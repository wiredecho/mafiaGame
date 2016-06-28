var express = require('express');
var path = require('path');

var app = express();

require('./server/config/mongoose.js');

app.use(express.static(path.join(__dirname, '/client')));
require('./server/config/routes.js')(app);

var server = app.listen(8000, function() {
	console.log('cool stuff on: 8000');
});

var io = require('socket.io').listen(server);
io.sockets.on('connection', function(socket) {
	console.log("a user connected");
	socket.on("user_registered", function(data) {
		console.log(data);
		chat_history.push("<i>" + data.userName + " has entered the chat</i>");
		io.emit("user_reg_response", {stuff: chat_history});
	})
	socket.on("posting_message", function (data) {
		console.log(data);
		chat_history.push(data.userName + " : " + data.message);
		io.emit('post_message_response', {stuff: chat_history});
	});
});