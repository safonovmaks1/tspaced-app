const Work = require('../models/Work');

// Add
function addWork(work) {
	return Work.create(work);
}

// Edit
async function editWork(id, work) {
	const newWork = await Work.findByIdAndUpdate(id, work, {
		returnDocument: 'after',
	});

	return newWork;
}

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
	editWork,
};
