import { CLOSE_MODAL, openModal, removePostAsync } from '@/actions';
import { ROLE } from '@/constants';
import { selectUserRole } from '@/selectors';
import { Button, Icon } from '@/ui';
import { checkAccess } from '@/utils';
import { RiCalendar2Line, RiDeleteBackLine } from '@remixicon/react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import s from './SpecialPanel.module.scss';

export const SpecialPanel = ({ id, year, location, editButton }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const userRole = useSelector(selectUserRole);

	const onPostRemove = (id) => {
		dispatch(
			openModal({
				text: 'Удалить статью?',
				onConfirm: () => {
					dispatch(removePostAsync(id)).then(() => {
						navigate(`/`);
					});
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	const isAdmin = checkAccess([ROLE.ADMIN], userRole);

	return (
		<div className={cn(s.specialPanel)}>
			<div className={s.specialPanelDate}>
				{year && (
					<Icon size='1rem' color='darken'>
						<RiCalendar2Line />
					</Icon>
				)}
				<span>{location}</span>
				<span>{year}</span>
			</div>

			{isAdmin && (
				<div className={s.specialPanelButtons}>
					{editButton}
					{year && (
						<Button className={s.specialPanelButton} onClick={() => onPostRemove(id)}>
							Удалить
							<Icon color='white'>
								<RiDeleteBackLine size='1.2rem' />
							</Icon>
						</Button>
					)}
				</div>
			)}
		</div>
	);
};
