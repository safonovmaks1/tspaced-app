const Work = require('../models/Work');

// Add
function addWork(work) {
	return Work.create(work);
}

// Edit

// Delete
function deleteWork(id) {
	return Work.deleteOne({ _id: id });
}

// Get all
function getWorks() {
	return Work.find();
}

module.exports = {
	addWork,
	getWorks,
	deleteWork,
};
