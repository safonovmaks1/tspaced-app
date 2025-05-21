const mongoose = require('mongoose');

const ServicesSchema = mongoose.Schema({
	text: {
		type: String,
		required: true,
	},
});

const Services = mongoose.model('Services', ServicesSchema);

module.exports = Services;
