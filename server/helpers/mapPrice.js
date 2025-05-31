module.exports = function (price) {
	return {
		id: price.id,
		title: price.title,
		price: price.price,
		features: price.features,
	};
};
