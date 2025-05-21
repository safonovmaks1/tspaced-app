const Services = require('../models/Services');

// Add
function addService(service) {
	return Services.create(service);
}

// Get all
function getServices() {
	return Services.find();
}

module.exports = {
	addService,
	getServices,
};
