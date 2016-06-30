var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RankSchema = new mongoose.Schema({
	name: String,
	metric: Number,
	file_name: String,
	isMafia: Boolean
}, { timestamps: true } );
mongoose.model('Rank', RankSchema);