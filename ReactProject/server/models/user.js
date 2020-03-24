const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	nickname: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	avatar: {
		type: String,
		default: '/public/img/avatar-default.png'
	},
	authority: {
		type: Number,
		enum: [1, 2],
		default: 1
	},
	last_modified_time: {
		type: Date,
		default: Date.now
	}
})
