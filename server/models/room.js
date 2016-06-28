var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RoomSchema = new mongoose.Schema({
	code: Number,
	players: [{ type: Schema.Types.ObjectId, ref: "Player"}]
}, { timestamps: true } );
mongoose.model('Room', RoomSchema);