const Faq = require('../models/Faq');

// Add
function addFaq(faq) {
	return Faq.create(faq);
}

// Edit
async function editFaq(id, faq) {
	const newFaq = await Faq.findByIdAndUpdate(id, faq, {
		returnDocument: 'after',
	});

	return newFaq;
}

// Delete
function deleteFaq(id) {
	return Faq.deleteOne({ _id: id });
}

// Get all
function getFaqs() {
	return Faq.find();
}

module.exports = {
	addFaq,
	getFaqs,
	deleteFaq,
	editFaq,
};
