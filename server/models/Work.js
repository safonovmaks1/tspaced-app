const mongoose = require('mongoose');

const WorkSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	works: {
		type: [String],
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

const Work = mongoose.model('Work', WorkSchema);

module.exports = Work;
