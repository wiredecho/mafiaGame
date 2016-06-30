var Players = require('../controllers/players.js');


module.exports = function(app) {

	// app.post('/newGame', function(req, res) {
	// 	players.create(req, res);
	// });
	app.get('/players', function(req, res) {
		Players.index(req, res);
	});
	app.post('/players', function(req, res) {
		console.log('server routes', req.body)
		Players.create(req, res);

	});
};