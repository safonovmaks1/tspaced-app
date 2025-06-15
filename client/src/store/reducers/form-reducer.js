import { ACTION_TYPE } from '../actions/action-type';

const initialFormState = {
	loading: false,
	error: null,
	success: false,
};

export const formReducer = (state = initialFormState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SEND_FORM_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
				success: false,
			};

		case ACTION_TYPE.SEND_FORM_SUCCESS:
			return {
				...state,
				loading: false,
				success: true,
			};

		case ACTION_TYPE.SEND_FORM_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
				success: false,
			};

		case ACTION_TYPE.RESET_FORM_STATE:
			return initialFormState;

		default:
			return state;
	}
};
