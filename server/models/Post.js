const mongoose = require('mongoose');
const validator = require('validator');

const PostSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
		validate: {
			validator: validator.isURL,
			message: 'Image should be avalid url',
		},
	},
	content: {
		type: String,
		required: true,
	},
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Comment',
		},
	],
	createdAt: {
		type: Date,
		default: Date.now,
		get: (date) => {
			if (date) return date.toLocaleDateString('ru-RU');
		},
	},
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
