import { Icon } from '@/ui';
import { request } from '@/utils';
import { RiDeleteBin3Line, RiSaveLine } from '@remixicon/react';
import { useState } from 'react';
import s from '../UserPage.module.scss';

export const UsersTableRow = ({
	id,
	login,
	registeredAt,
	roleId: userRoleId,
	roles,
	onUserRemove,
}) => {
	const [initialRoleId, setInitialRoleId] = useState(userRoleId);
	const [selectedRoleId, setSelectedRoleId] = useState(userRoleId);

	const onRoleChange = ({ target }) => {
		setSelectedRoleId(Number(target.value));
	};

	const onRoleSave = (userId, newUserRoleId) => {
		request(`/users/${userId}`, 'PATCH', { roleId: newUserRoleId }).then(() => {
			setInitialRoleId(newUserRoleId);
		});
	};

	const isSaveButtonDisabled = selectedRoleId === initialRoleId;

	return (
		<tr key={id}>
			<td>{login}</td>
			<td>{registeredAt}</td>
			<td>
				<select className={s.selectRole} value={selectedRoleId} onChange={onRoleChange}>
					{roles.map(({ id: roleId, name: roleName }) => (
						<option key={roleId} value={roleId}>
							{roleName}
						</option>
					))}
				</select>
			</td>
			<td>
				<Icon
					color='darken'
					className={s.iconAction}
					disabled={isSaveButtonDisabled}
					onClick={() => onRoleSave(id, selectedRoleId)}
				>
					<RiSaveLine size='24' />
				</Icon>
			</td>
			<td>
				<Icon color='darken' onClick={onUserRemove} className={s.iconActionDelete}>
					<RiDeleteBin3Line size='24' />
				</Icon>
			</td>
		</tr>
	);
};
