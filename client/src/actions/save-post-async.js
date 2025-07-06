// import { request } from '../utils/request';
import { setPostData } from './set-post-data';

// export const savePostAsync = (id, newPostData) => async (dispatch) => {
// 	const saveRequest = id
// 		? request(`/posts/${id}`, 'PATCH', newPostData)
// 		: request('/posts', 'POST', newPostData);

// 	const updatedPost = await saveRequest;
// 	dispatch(setPostData(updatedPost.data));
// 	return updatedPost.data;
// };

export const savePostAsync = (id, formData) => async (dispatch) => {
	const url = id ? `/posts/${id}` : '/posts';
	const method = id ? 'PATCH' : 'POST';

	const response = await fetch(`/api${url}`, {
		method,
		body: formData,
		credentials: 'include',
	});

	if (!response.ok) {
		const error = await response.json();
		throw new Error(error.message || 'Failed to save post');
	}

	const result = await response.json();
	dispatch(setPostData(result.data));
	return result.data;
};
