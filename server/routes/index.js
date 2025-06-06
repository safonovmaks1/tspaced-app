const express = require('express');

const router = express.Router({ mergeParams: true });

router.use('/', require('./auth'));
router.use('/posts', require('./post'));
router.use('/users', require('./user'));
router.use('/abouts', require('./about'));
router.use('/services', require('./service'));
router.use('/prices', require('./price'));
router.use('/faqs', require('./faq'));
router.use('/works', require('./work'));

module.exports = router;
