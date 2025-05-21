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
});

const Work = mongoose.model('Work', WorkSchema);

module.exports = Work;
