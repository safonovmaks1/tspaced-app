const Price = require('../models/Price');

// Add
function addPrice(price) {
	return Price.create(price);
}

// Edit

// Delete
function deletePrice(id) {
	return Price.deleteOne({ _id: id });
}

// Get all
function getPrices() {
	return Price.find();
}

module.exports = {
	addPrice,
	getPrices,
	deletePrice,
};
