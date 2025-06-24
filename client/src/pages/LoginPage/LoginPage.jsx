import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { Form } from '../../components';
import { ROLE } from '../../constants';
import { useResetForm } from '../../hooks';
import { setUser } from '../../store/actions';
import { selectUserRole } from '../../store/selectors';
import { Button, Container, Input, Section, Title } from '../../ui';
import { request } from '../../utils';
import { authFormSchema } from './authFormSchema';
import s from './LoginPage.module.scss';

export const LoginPage = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(authFormSchema),
	});

	const [serverError, setServerError] = useState(null);
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);

	useResetForm(reset);

	const onSubmit = ({ login, password }) => {
		request('/login', 'POST', { login, password }).then(({ error, user }) => {
			if (error) {
				setServerError(`Ошибка запроса: ${error}`);
				return;
			}

			dispatch(setUser(user));
			sessionStorage.setItem('userData', JSON.stringify(user));
		});
	};

	const formError = errors?.login?.message || errors?.password?.message;
	const errorMessage = formError || serverError;

	if (roleId !== ROLE.GUEST) {
		return <Navigate to='/' />;
	}

	return (
		<Section>
			<Container>
				<Title>Авторизация</Title>

				<Form className={s.form} onSubmit={handleSubmit(onSubmit)}>
					<Input
						type='text'
						placeholder='Логин...'
						{...register('login', {
							onChange: () => setServerError(null),
						})}
					/>
					<Input
						type='password'
						placeholder='Пароль...'
						{...register('password', {
							onChange: () => setServerError(null),
						})}
					/>
					<Button width='w100' type='submit' disabled={!!formError}>
						Авторизоваться
					</Button>
					{errorMessage && <div className={s.formError}>{errorMessage}</div>}
					<div className={s.formText}>
						Don't have an account?
						<Link to='/register' className={s.formLink}>
							Регистрация
						</Link>
					</div>
				</Form>
			</Container>
		</Section>
	);
};
