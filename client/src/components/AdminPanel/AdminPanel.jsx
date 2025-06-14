import { RiFileEditLine, RiUser2Line } from '@remixicon/react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUserLogin } from '../../store/selectors';
import { Container, Icon } from '../../ui';
import s from './AdminPanel.module.scss';

export const AdminPanel = () => {
	const login = useSelector(selectUserLogin);

	if (!login) {
		return null;
	}

	return (
		<Container>
			<div className={s.adminPanel}>
				<div className={s.adminPanelLogin}>{login}</div>

				<div className={s.adminPanelButtons}>
					<Link to='/post' className={s.adminPanelIcon}>
						<Icon color='darken'>
							<RiFileEditLine size='24' />
						</Icon>
						<span className={s.adminPanelIconText}>Добавить работу</span>
					</Link>
					<Link to='/users' className={s.adminPanelIcon}>
						<Icon color='darken'>
							<RiUser2Line size='24' />
						</Icon>
						<span className={s.adminPanelIconText}>Пользователи</span>
					</Link>
				</div>
			</div>
		</Container>
	);
};
