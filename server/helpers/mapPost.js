const mongoose = require('mongoose');
const mapComment = require('./mapComment');

module.exports = function (post) {
	return {
		id: post.id,
		title: post.title,
		imageUrl: `/uploads/${post.image}`,
		content: post.content,
		location: post.location,
		year: post.year,
		publishedAt: post.createdAt,
		comments: post.comments.map((comment) =>
			mongoose.isObjectIdOrHexString(comment) ? comment : mapComment(comment),
		),
	};
};
