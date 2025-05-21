const mongoose = require('mongoose');

const ServicesSchema = mongoose.Schema({
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

const Services = mongoose.model('Services', ServicesSchema);

module.exports = Services;
