import { PrivateContent } from '@/components';
import { ROLE } from '@/constants';
import { selectUserRole } from '@/selectors';
import { Container, Section, Title } from '@/ui';
import { checkAccess, request } from '@/utils';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import s from './UserPage.module.scss';
import { UsersTableRow } from './UsersTableRow/UsersTableRow';

export const UsersPage = () => {
	const [users, setUsers] = useState([]);
	const [roles, setRoles] = useState([]);

	const [errorMessage, setErrorMessage] = useState('');
	const [shouldUpdateUserList, setShouldUpdateUserList] = useState(false);
	const userRole = useSelector(selectUserRole);

	useEffect(() => {
		if (!checkAccess([ROLE.ADMIN], userRole)) {
			return;
		}

		Promise.all([request('/users'), request('/users/roles')]).then(
			([usersRes, rolesRes]) => {
				if (usersRes.error || rolesRes.error) {
					setErrorMessage(usersRes.error || rolesRes.error);
					return;
				}

				setUsers(usersRes.data);
				setRoles(rolesRes.data);
			},
		);
	}, [shouldUpdateUserList, userRole]);

	const onUserRemove = (userId) => {
		if (!checkAccess([ROLE.ADMIN], userRole)) {
			return;
		}

		request(`/users/${userId}`, 'DELETE').then(() => {
			setShouldUpdateUserList(!shouldUpdateUserList);
		});
	};

	return (
		<Section>
			<PrivateContent access={[ROLE.ADMIN]} serverError={errorMessage}>
				<Container>
					<Title>Пользователи</Title>

					<div className={s.userContainer}>
						<div className={s.userTableWrapper}>
							<table className={s.userTable}>
								<thead>
									<tr>
										<th>Логин</th>
										<th>Дата регистрации</th>
										<th>Роль</th>
										<th></th>
										{/* Для иконки сохранения */}
										<th></th>
										{/* Для иконки удаления */}
									</tr>
								</thead>

								<tbody>
									{users.map(({ id, login, registeredAt, roleId }) => (
										<UsersTableRow
											key={id}
											id={id}
											login={login}
											registeredAt={registeredAt}
											roleId={roleId}
											roles={roles.filter(({ id: roleId }) => roleId !== ROLE.GUEST)}
											onUserRemove={() => onUserRemove(id)}
										/>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</Container>
			</PrivateContent>
		</Section>
	);
};
