const mongoose = require('mongoose');

const AboutSchema = mongoose.Schema({
	text: {
		type: String,
		required: true,
	},
});

const About = mongoose.model('About', AboutSchema);

module.exports = About;
