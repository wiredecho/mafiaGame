var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

require('./server/config/mongoose.js');

app.use(express.static(path.join(__dirname, '/client')));
require('./server/config/routes.js')(app);

var server = app.listen(8000, function() {
	console.log('cool stuff on: 8000');
});