const express = require('express');
const { getPrices, addPrice } = require('../controllers/price');
const authenticated = require('../middlewares/authenticated');
const hasRole = require('../middlewares/hasRole');
const ROLES = require('../constants/roles');
const mapPrice = require('../helpers/mapPrice');

const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
	const price = await getPrices();

	res.send({ data: { prices: price.map(mapPrice) } });
});

router.post('/', authenticated, hasRole([ROLES.ADMIN]), async (req, res) => {
	const newPrice = await addPrice({
		title: req.body.title,
		price: req.body.price,
		features: req.body.features,
	});
	res.send({ data: mapPrice(newPrice) });
});

module.exports = router;
