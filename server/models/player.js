var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new mongoose.Schema({
	name: String,
	_room: { type: Schema.Types.ObjectId, ref: "Room"}
}, { timestamps: true } );
mongoose.model('Player', PlayerSchema);