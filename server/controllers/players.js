var mongoose = require('mongoose');
var Player = mongoose.model('Player');

module.exports = (function() {
	return {
		index: function(req, res) {
			Player.find({}, function(err, results) {
				if(err) {
					console.log(err);
				} else {
					res.json(results);
				}
			});
		},
		create: function(req, res) {
			console.log('in server controller!', req.body);
			var newPlayer = new Player(req.body);
			newPlayer.save(function(err, player) {
				if(err) {
					console.log(err);
				}
				else {
					res.json(player);
				}
			});
		}
	}
} ());