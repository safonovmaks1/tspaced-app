import { ACTION_TYPE } from '@/actions';

const initialThemeState = {
	theme: localStorage.getItem('theme') || 'light',
};

export const themeReducer = (state = initialThemeState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_THEME:
			return { ...state, theme: action.payload };
		default:
			return state;
	}
};
