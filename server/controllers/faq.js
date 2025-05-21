const Faq = require('../models/Faq');

// Add
function addFaq(faq) {
	return Faq.create(faq);
}

// Get all
function getFaqs() {
	return Faq.find();
}

module.exports = {
	addFaq,
	getFaqs,
};
