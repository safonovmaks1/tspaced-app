import { CLOSE_MODAL, openModal, removeCommentAsync } from '@/actions';
import { ROLE } from '@/constants';
import { selectUserRole } from '@/selectors';
import { Icon } from '@/ui';
import { RiCalendar2Line, RiDeleteBin3Line, RiUser3Line } from '@remixicon/react';
import { useDispatch, useSelector } from 'react-redux';
import s from './Comment.module.scss';

export const Comment = ({ postId, id, author, publishedAt, content }) => {
	const dispatch = useDispatch();

	const userRole = useSelector(selectUserRole);

	const onCommentRemove = (id) => {
		dispatch(
			openModal({
				text: 'Удалить комментарий?',
				onConfirm: () => {
					dispatch(removeCommentAsync(postId, id));
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};
	const isAdminOrModerator = [ROLE.ADMIN, ROLE.MODERATOR].includes(userRole);

	return (
		<>
			<div className={s.comment}>
				<div className={s.commentInfo}>
					<div className={s.commentInfoContainer}>
						<div className={s.commentAuthor}>
							<Icon color='darken'>
								<RiUser3Line size='1.2rem' />
							</Icon>
							<span>{author}</span>
						</div>
						<div className={s.commentDate}>
							<Icon color='darken'>
								<RiCalendar2Line size='1.2rem' />
							</Icon>
							<span>{publishedAt}</span>
						</div>
					</div>

					{isAdminOrModerator && (
						<Icon className={s.commentIcon} onClick={() => onCommentRemove(id)}>
							<RiDeleteBin3Line size='1.5rem' />
						</Icon>
					)}
				</div>
				<p className={s.commentText}>{content}</p>
			</div>
		</>
	);
};
