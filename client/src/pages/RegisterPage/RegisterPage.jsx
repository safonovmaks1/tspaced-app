import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import * as yup from 'yup';
import { ROLE } from '../../constants';
import { useResetForm } from '../../hooks';
import { setUser } from '../../store/actions';
import { selectUserRole } from '../../store/selectors';
import { Button, Container, Input, Section, Title } from '../../ui';
import { request } from '../../utils';
import s from '../LoginPage/LoginPage.module.scss';

const regFormSchema = yup.object().shape({
	login: yup
		.string()
		.required('Заполните логин')
		.matches(/^\w+$/, 'Неверно заполнен логин. Допускаються только буквы и цифры')
		.min(3, 'Неверно заполнен логин. Минимум 3 символа')
		.max(15, 'Неверно заполнен логин. Максимум 15 символов'),
	password: yup
		.string()
		.required('Заполните пароль')
		.matches(
			/^[\w#%]+$/,
			'Неверно заполнен пароль. Допускаются буквы, цифры и знаки # %',
		)
		.min(6, 'Неверно заполнен пароль. Минимум 6 символа')
		.max(30, 'Неверно заполнен пароль. Максимум 30 символов'),

	passcheck: yup
		.string()
		.required('Повторите пароль')
		.oneOf([yup.ref('password'), null], 'Пароль не совпадает'),
});

export const RegisterPage = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
			passcheck: '',
		},
		resolver: yupResolver(regFormSchema),
	});

	const [serverError, setServerError] = useState(null);
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);

	useResetForm(reset);

	const onSubmit = ({ login, password }) => {
		request('/register', 'POST', { login, password }).then(({ error, user }) => {
			if (error) {
				setServerError(`Ошибка запроса: ${error}`);
				return;
			}

			dispatch(setUser(user));
			sessionStorage.setItem('userData', JSON.stringify(user));
		});
	};

	const formError =
		errors?.login?.message || errors?.password?.message || errors?.passcheck?.message;
	const errorMessage = formError || serverError;

	if (roleId !== ROLE.GUEST) {
		return <Navigate to="/" />;
	}

	return (
		<Section>
			<Container>
				<Title>Регистрация</Title>

				<form
					autoComplete={'off'}
					className={s.form}
					onSubmit={handleSubmit(onSubmit)}>
					<Input
						type="text"
						placeholder="Логин..."
						{...register('login', { onChange: () => setServerError(null) })}
					/>
					<Input
						type="password"
						placeholder="Пароль..."
						{...register('password', {
							onChange: () => setServerError(null),
						})}
					/>
					<Input
						type="password"
						placeholder="Повторите Пароль..."
						{...register('passcheck', {
							onChange: () => setServerError(null),
						})}
					/>
					<Button width="w100" type="submit" disabled={!!formError}>
						Зарегистрироваться
					</Button>
					{errorMessage && <div className={s.formError}>{errorMessage}</div>}
					<div className={s.formText}>
						Регистрируясь вы&nbsp;соглашаетесь&nbsp;с
						<Link to="/privacy" className={s.formLink}>
							Условиями использования
						</Link>
					</div>
					<div className={s.formText}>
						Уже есть аккаунт?
						<Link to="/login" className={s.formLink}>
							Войдите
						</Link>
					</div>
				</form>
			</Container>
		</Section>
	);
};
