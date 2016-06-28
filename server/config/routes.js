var Rooms = require('../controllers/rooms.js');
var Users = require('../controllers/users.js');


module.exports = function(app) {
	app.get('/', function(res, res) {
		res.render('index');
	})
	app.post('/users', function(req, res) {
		users.create(req, res);
	});
	app.get('/users', function(req, res) {
		users.index(req, res);
	});
};