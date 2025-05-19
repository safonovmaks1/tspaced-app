const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
	content: {
		type: String,
		required: true,
	},
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
	createdAt: {
		type: Date,
		default: Date.now,
		get: (date) => {
			if (date) return date.toLocaleDateString('ru-RU');
		},
	},
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
