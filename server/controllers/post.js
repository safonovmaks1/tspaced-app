const Post = require('../models/Post');
const path = require('path');
const fs = require('fs').promises;

// add
async function addPost(post) {
	const newPost = await Post.create(post);

	return newPost;
}

// edit
async function editPost(id, post) {
	const newPost = await Post.findByIdAndUpdate(id, post, {
		returnDocument: 'after',
	});

	return newPost;
}

// delete
async function deletePost(id) {
	const post = await Post.findById(id);

	if (!post) {
		throw new Error('Post not found');
	}

	if (post.image) {
		const imagePath = path.join(__dirname, '../uploads', post.image);

		try {
			await fs.unlink(imagePath);
			console.log(`Image deleted: ${imagePath}`);
		} catch (err) {
			console.error(`Error deleting image (${imagePath}):`, err);
		}
	}

	return Post.deleteOne({ _id: id });
}

// get item
function getPost(id) {
	return Post.findById(id).populate({
		path: 'comments',
		populate: 'author',
	});
}

// get list with search and pagination
async function getPosts(search = '', limit = 10, page = 1) {
	const [posts, count] = await Promise.all([
		Post.find({ title: { $regex: search, $options: 'i' } })
			.limit(limit)
			.skip((page - 1) * limit)
			.sort({ createdAt: -1 }),
		Post.countDocuments({ title: { $regex: search, $options: 'i' } }),
	]);

	return {
		posts,
		lastPage: Math.ceil(count / limit),
	};
}

module.exports = {
	addPost,
	editPost,
	deletePost,
	getPost,
	getPosts,
};
