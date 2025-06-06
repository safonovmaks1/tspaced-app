const Price = require('../models/Price');

// Add
function addPrice(price) {
	return Price.create(price);
}

// Edit
async function editPrice(id, price) {
	const newPrice = await Price.findByIdAndUpdate(id, price, {
		returnDocument: 'after',
	});

	return newPrice;
}

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
	editPrice,
};
