const mongoose = require('mongoose');

const FaqSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
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

const Faq = mongoose.model('Faq', FaqSchema);

module.exports = Faq;
