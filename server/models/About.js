const mongoose = require('mongoose');

const AboutSchema = mongoose.Schema({
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

const About = mongoose.model('About', AboutSchema);

module.exports = About;
