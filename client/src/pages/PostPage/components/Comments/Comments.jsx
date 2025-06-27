import { ROLE } from '@/constants';
import { addCommentAsync } from '@/store/actions';
import { selectUserRole } from '@/store/selectors';
import { Button, Container, Icon, Section } from '@/ui';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './Comments.module.scss';
import { Comment } from './Components';

export const Comments = ({ comments, postId }) => {
	const [newComment, setNewComment] = useState('');
	const userRole = useSelector(selectUserRole);
	const dispatch = useDispatch();

	const isGuest = userRole === ROLE.GUEST;

	// const onNewCommentAdd = (postId, content) => {
	// 	dispatch(addCommentAsync(postId, content));
	// 	setNewComment('');
	// };

	const onCommentChange = ({ target }) => setNewComment(target.value);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!newComment.trim()) return;

		dispatch(addCommentAsync(postId, newComment));
		setNewComment('');
	};

	return (
		<>
			<Section className={s.comments}>
				<Container>
					<form onSubmit={handleSubmit}>
						{!isGuest && (
							<div className={s.commentsContainer}>
								<textarea
									className={s.commentsTextarea}
									name='comment'
									value={newComment}
									placeholder='Комментарий...'
									onChange={onCommentChange}
								></textarea>
								<Button type='submit' width='w100' className={s.commentsButton}>
									<Icon></Icon>
									Добавить комментарий
								</Button>
							</div>
						)}
					</form>

					<div className={s.commentsItem}>
						{comments.map(({ id, author, content, publishedAt }) => (
							<Comment
								key={id}
								postId={postId}
								id={id}
								author={author}
								content={content}
								publishedAt={publishedAt}
							/>
						))}
					</div>
				</Container>
			</Section>
		</>
	);
};
