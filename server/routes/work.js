const express = require('express');
const { getWorks, addWork, deleteWork, editWork } = require('../controllers/work');
const authenticated = require('../middlewares/authenticated');
const hasRole = require('../middlewares/hasRole');
const ROLES = require('../constants/roles');
const mapWork = require('../helpers/mapWork');

const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
	const work = await getWorks();

	res.send({ data: { works: work.map(mapWork) } });
});

router.patch('/:id', authenticated, hasRole([ROLES.ADMIN]), async (req, res) => {
	const updatedWork = await editWork(req.params.id, {
		title: req.body.title,
		works: req.body.works,
	});

	res.send({ data: mapWork(updatedWork) });
});

router.delete('/:id', authenticated, hasRole([ROLES.ADMIN]), async (req, res) => {
	await deleteWork(req.params.id);

	res.send({ error: null });
});

router.post('/', authenticated, hasRole([ROLES.ADMIN]), async (req, res) => {
	const newWork = await addWork({
		title: req.body.title,
		works: req.body.works,
	});
	res.send({ data: mapWork(newWork) });
});

module.exports = router;
