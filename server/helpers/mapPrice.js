module.exports = function (price) {
	return {
		id: price.id,
		price: price.price,
		features: price.features,
	};
};
