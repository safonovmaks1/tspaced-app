const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.join(__dirname, '../uploads'));
	},
	filename: (req, file, cb) => {
		const filename = Date.now() + '-' + Math.round(Math.random() * 1e9);
		cb(null, filename + path.extname(file.originalname));
	},
});

const upload = multer({
	storage,
	fileFilter: (req, file, cb) => {
		if (file.mimetype.startsWith('image/')) {
			cb(null, true);
		} else {
			cb(new Error('Only image files are allowed!'), false);
		}
	},
	limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

module.exports = upload;
