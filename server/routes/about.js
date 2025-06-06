const express = require('express');
const { getAbouts, addAbout, deleteAbout, editAbout } = require('../controllers/about');
const authenticated = require('../middlewares/authenticated');
const hasRole = require('../middlewares/hasRole');
const ROLES = require('../constants/roles');
const mapAbout = require('../helpers/mapAbout');

const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
	const about = await getAbouts();

	res.send({ data: { abouts: about.map(mapAbout) } });
});

router.patch('/:id', authenticated, hasRole([ROLES.ADMIN]), async (req, res) => {
	const updatedAbout = await editAbout(req.params.id, {
		text: req.body.text,
	});

	res.send({ data: mapAbout(updatedAbout) });
});

router.delete('/:id', authenticated, hasRole([ROLES.ADMIN]), async (req, res) => {
	await deleteAbout(req.params.id);

	res.send({ error: null });
});

router.post('/', authenticated, hasRole([ROLES.ADMIN]), async (req, res) => {
	const newAbout = await addAbout({
		text: req.body.text,
	});

	res.send({ data: mapAbout(newAbout) });
});

module.exports = router;
