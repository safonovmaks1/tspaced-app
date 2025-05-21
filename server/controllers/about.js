const About = require('../models/About');

// Add
function addAbout(about) {
	return About.create(about);
}

// Get all
function getAbouts() {
	return About.find();
}

module.exports = {
	addAbout,
	getAbouts,
};
