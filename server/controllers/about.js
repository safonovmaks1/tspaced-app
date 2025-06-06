const About = require('../models/About');

// Add
function addAbout(about) {
	return About.create(about);
}

// Edit
async function editAbout(id, about) {
	const newAbout = await About.findByIdAndUpdate(id, about, {
		returnDocument: 'after',
	});

	return newAbout;
}

// Delete
function deleteAbout(id) {
	return About.deleteOne({ _id: id });
}

// Get all
function getAbouts() {
	return About.find();
}

module.exports = {
	addAbout,
	getAbouts,
	deleteAbout,
	editAbout,
};
