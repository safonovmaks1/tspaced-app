const Service = require('../models/Service');

// Add
function addService(service) {
	return Service.create(service);
}

// Edit

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
};
