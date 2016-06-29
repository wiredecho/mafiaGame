var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new mongoose.Schema({
	name: String,
	days_survived: Number,
	file_name: String
}, { timestamps: true } );
mongoose.model('Player', PlayerSchema);