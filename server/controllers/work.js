const Work = require('../models/Work');

// Add
function addWork(work) {
	return Work.create(work);
}

// Get all
function getWorks() {
	return Work.find();
}

module.exports = {
	addWork,
	getWorks,
};
