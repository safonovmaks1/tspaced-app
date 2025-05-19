const mongoose = require('mongoose');
const roles = require('../constants/roles');

const UserSchema = mongoose.Schema({
	login: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	role: {
		type: Number,
		default: roles.USER,
	},
	createdAt: {
		type: Date,
		default: Date.now,
		get: (date) => {
			if (date) return date.toLocaleDateString('ru-RU');
		},
	},
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
