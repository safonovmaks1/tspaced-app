import { RiFileEditLine, RiIdCardLine, RiUser2Line } from '@remixicon/react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ROLE } from '../../constants';
import { selectUserLogin, selectUserRole } from '../../store/selectors';
import { Container, Icon } from '../../ui';
import { checkAccess } from '../../utils';
import s from './AdminPanel.module.scss';

export const AdminPanel = () => {
	const login = useSelector(selectUserLogin);
	const roleId = useSelector(selectUserRole);
	const isAdmin = checkAccess([ROLE.ADMIN], roleId);

	return (
		<Container>
			<div className={s.adminPanel}>
				<div className={s.adminPanelLogin}>
					<Icon color="darken">
						<RiIdCardLine size="24" />
					</Icon>
					{login}
				</div>
				{isAdmin && (
					<div className={s.adminPanelButtons}>
						<Link to="/post" className={s.adminPanelIcon}>
							<Icon color="darken">
								<RiFileEditLine size="24" />
							</Icon>
							<span className={s.adminPanelIconText}>Добавить работу</span>
						</Link>
						<Link to="/users" className={s.adminPanelIcon}>
							<Icon color="darken">
								<RiUser2Line size="24" />
							</Icon>
							<span className={s.adminPanelIconText}>Пользователи</span>
						</Link>
					</div>
				)}
			</div>
		</Container>
	);
};
