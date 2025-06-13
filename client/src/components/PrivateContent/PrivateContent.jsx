import { useSelector } from 'react-redux';
import { Error } from '../../components/Error/Error';
import { ERROR } from '../../constants';
import { selectUserRole } from '../../store/selectors';
import { checkAccess } from '../../utils';

export const PrivateContent = ({ children, access, serverError = null }) => {
	const userRole = useSelector(selectUserRole);

	const accessError = checkAccess(access, userRole) ? null : ERROR.ACCESS_DINIED;
	const error = serverError || accessError;

	return error ? <Error error={error} /> : children;
};
