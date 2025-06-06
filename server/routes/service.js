const express = require('express');
const {
	addService,
	getServices,
	deleteService,
	editService,
} = require('../controllers/service');
const authenticated = require('../middlewares/authenticated');
const hasRole = require('../middlewares/hasRole');
const ROLES = require('../constants/roles');
const mapService = require('../helpers/mapService');

const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
	const service = await getServices();
	res.send({ data: { services: service.map(mapService) } });
});

router.patch('/:id', authenticated, hasRole([ROLES.ADMIN]), async (req, res) => {
	const updatedService = await editService(req.params.id, {
		text: req.body.text,
	});

	res.send({ data: mapService(updatedService) });
});

router.delete('/:id', authenticated, hasRole([ROLES.ADMIN]), async (req, res) => {
	await deleteService(req.params.id);
	res.send({ error: null });
});

router.post('/', authenticated, hasRole([ROLES.ADMIN]), async (req, res) => {
	const newService = await addService({
		text: req.body.text,
	});
	res.send({ data: mapService(newService) });
});

module.exports = router;
