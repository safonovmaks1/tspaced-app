const Price = require('../models/Price');

// Add
function addPrice(price) {
	return Price.create(price);
}

// Get all
function getPrices() {
	return Price.find();
}

module.exports = {
	addPrice,
	getPrices,
};
