const mongoose = require('mongoose');

const ServiceSchema = mongoose.Schema({
	text: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
		get: (date) => {
			if (date) return date.toLocaleDateString('ru-RU');
		},
	},
});

const Service = mongoose.model('Service', ServiceSchema);

module.exports = Service;
