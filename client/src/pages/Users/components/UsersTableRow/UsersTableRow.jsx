import { RiDeleteBin3Line, RiSafe3Line, RiSafeLine, RiSaveLine } from '@remixicon/react';
import { useState } from 'react';
import { Icon } from '../../../../shared';
import { request } from '../../../../utils';

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
				<select value={selectedRoleId} onChange={onRoleChange}>
					{roles.map(({ id: roleId, name: roleName }) => (
						<option key={roleId} value={roleId}>
							{roleName}
						</option>
					))}
				</select>
			</td>
			<td>
				<Icon
					size="24"
					color="darken"
					disabled={isSaveButtonDisabled}
					onClick={() => onRoleSave(id, selectedRoleId)}>
					<RiSaveLine />
				</Icon>
			</td>
			<td>
				<Icon size="24" color="del" onClick={onUserRemove}>
					<RiDeleteBin3Line />
				</Icon>
			</td>
		</tr>
	);
};
