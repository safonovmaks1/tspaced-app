import * as yup from 'yup';

const regExpPhone = new RegExp(/^\+?[1-9][0-9]{7,14}$/);

export const schema = yup.object().shape({
	name: yup
		.string()
		.trim()
		.required('Ваше Имя: Обязательно для заполнения')
		.min(2, 'Необходимо минимум 2 символа'),
	phone: yup
		.string()
		.required('Обязательное поле')
		.matches(regExpPhone, 'Неверный формат номера'),
	message: yup
		.string()
		.trim()
		.required('Описание проекта: Обязательно для заполнения')
		.min(10, 'Минимум 10 символов'),
	messenger: yup.string().required('Выберите мессенджер для связи'),
	agreement: yup.boolean().oneOf([true], 'Необходимо ваше согласие'),
});
