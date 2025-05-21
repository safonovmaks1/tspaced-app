const mongoose = require('mongoose');

const PriceSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	features: {
		type: [String],
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
		get: (date) => {
			if (date) return date.toLocaleDateString('ru-RU');
		},
	},
});

const Price = mongoose.model('Price', PriceSchema);

module.exports = Price;
