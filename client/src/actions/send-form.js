import { ACTION_TYPE } from './action-type';

export const sendForm = (formData) => async (dispatch) => {
	dispatch({ type: ACTION_TYPE.SEND_FORM_REQUEST });

	try {
		const response = await fetch('/api/send-to-telegram', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formData),
		});

		if (!response.ok) throw new Error('Ошибка сервера');

		dispatch({ type: ACTION_TYPE.SEND_FORM_SUCCESS });
		return true;
	} catch (error) {
		dispatch({ type: ACTION_TYPE.SEND_FORM_FAILURE, payload: error.message });
		return false;
	}
};
