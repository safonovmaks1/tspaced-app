const Service = require('../models/Service');

// Add
function addService(service) {
	return Service.create(service);
}

// Edit
async function editService(id, service) {
	const newService = await Service.findByIdAndUpdate(id, service, {
		returnDocument: 'after',
	});

	return newService;
}

// Delete
function deleteService(id) {
	return Service.deleteOne({ _id: id });
}

// Get all
function getServices() {
	return Service.find();
}

module.exports = {
	addService,
	getServices,
	deleteService,
	editService,
};
