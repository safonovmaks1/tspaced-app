const express = require('express');
const { getFaqs, addFaq } = require('../controllers/faq');
const authenticated = require('../middlewares/authenticated');
const hasRole = require('../middlewares/hasRole');
const ROLES = require('../constants/roles');
const mapFaq = require('../helpers/mapFaq');

const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
	const faq = await getFaqs();

	res.send({ data: { faqs: faq.map(mapFaq) } });
});

router.post('/', authenticated, hasRole([ROLES.ADMIN]), async (req, res) => {
	const newFaq = await addFaq({
		title: req.body.title,
		text: req.body.text,
	});
	res.send({ data: mapFaq(newFaq) });
});

module.exports = router;
