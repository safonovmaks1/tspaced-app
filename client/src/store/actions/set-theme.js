import { ACTION_TYPE } from './action-type';

export const setTheme = (theme) => (dispatch) => {
	dispatch({
		type: ACTION_TYPE.SET_THEME,
		payload: theme,
	});
};
