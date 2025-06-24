import { yupResolver } from '@hookform/resolvers/yup';
import { RiArrowRightUpLine } from '@remixicon/react';
import cn from 'classnames';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetFormState, sendForm } from '../../store/actions';
import { Button, Icon, Input } from '../../ui';
import { Form } from '../Form/Form';
import s from './ContactForm.module.scss';
import { contactFormSchema } from './contactFormSchema';

export const ContactForm = () => {
	const [countdown, setCountdown] = useState(5);
	const {
		register,
		handleSubmit,
		reset: resetForm,
		formState: { errors, isValid },
	} = useForm({
		resolver: yupResolver(contactFormSchema),
		mode: 'onChange',
		defaultValues: {
			name: '',
			phone: '',
			message: '',
			messenger: 'telegram',
			agreement: false,
		},
	});

	const dispatch = useDispatch();
	const { loading, error, success } = useSelector((state) => state.form);

	const handleReset = useCallback(() => {
		dispatch(resetFormState());
		resetForm();
		setCountdown(5);
	}, [dispatch, resetForm]);

	useEffect(() => {
		let timer;

		if (success) {
			setCountdown(5);

			timer = setInterval(() => {
				setCountdown((prev) => {
					if (prev <= 1) {
						clearInterval(timer);
						handleReset();
						return 0;
					}
					return prev - 1;
				});
			}, 1000);
		}

		return () => {
			if (timer) clearInterval(timer);
		};
	}, [success, dispatch, handleReset]);

	useEffect(() => {
		return () => {
			dispatch(resetFormState());
		};
	}, [dispatch]);

	const submitForm = async (data) => {
		const success = await dispatch(sendForm(data));
		if (success) resetForm();
	};

	const formError =
		errors?.name?.message ||
		errors?.phone?.message ||
		errors?.messenger?.message ||
		errors?.message?.message ||
		errors?.agreement?.message;

	const errorMessage = formError;

	return (
		<>
			{success ? (
				<div className={s.successContainer}>
					<h3 className={s.successTitle}>Заявка отправлена!</h3>
					<p className={s.successMessage}>Мы свяжемся с вами в ближайшее время</p>
					<p className={s.successCountdown}>
						Форма автоматически сбросится через: {countdown} сек.
					</p>
					<Button className={s.successButton} type='button' onClick={handleReset}>
						Отправить новую заявку
					</Button>
				</div>
			) : (
				<Form className={s.form} onSubmit={handleSubmit(submitForm)}>
					<div className={s.formWrapper}>
						<div className={s.formField}>
							<label className={s.formLabel} htmlFor='name'>
								Ваше Имя*
							</label>
							<Input
								type='text'
								className={s.formInput}
								placeholder='Ведите ваше имя'
								autoComplete='name'
								{...register('name')}
							/>
						</div>

						<div className={s.formField}>
							<label className={s.formLabel} htmlFor='phone'>
								Ваш номер телефона*
							</label>
							<Input
								type='tel'
								id='phone'
								className={s.formInput}
								placeholder='Ведите ваш телефон'
								autoComplete='tel'
								{...register('phone')}
							/>
						</div>

						<div className={s.formField}>
							<label className={s.formLabel}>Мессенджер для связи:</label>
							<div className={cn(s.formInput, s.options)}>
								<div className={s.optionsItem}>
									<input
										id='telegram'
										type='radio'
										value='telegram'
										className={s.optionsInput}
										autoComplete='off'
										{...register('messenger')}
										defaultChecked
									/>
									<label className={s.optionsLabel} htmlFor='telegram'>
										<span>Telegram</span>
									</label>
								</div>
								{/*  */}
								<div className={s.optionsItem}>
									<input
										id='whatsapp'
										type='radio'
										value='whatsapp'
										className={s.optionsInput}
										autoComplete='off'
										{...register('messenger')}
									/>
									<label className={s.optionsLabel} htmlFor='whatsapp'>
										<span>WhatsApp</span>
									</label>
								</div>
							</div>
						</div>

						<div className={s.formField}>
							<label className={s.formLabel} htmlFor='message'>
								Описание вашего проекта*
							</label>
							<textarea
								id='message'
								name='message'
								className={s.formInput}
								placeholder='Расскажите нам о вашем проекте...'
								autoComplete='off'
								{...register('message')}
							></textarea>
						</div>

						<div className={s.formItem}>
							<input
								id='formAgreement'
								type='checkbox'
								name='agreement'
								className={s.formCheck}
								autoComplete='off'
								{...register('agreement')}
							/>
							<label htmlFor='formAgreement' className={s.formCheckLabel}>
								<span>
									Я даю свое согласие на
									<Link to='/privacy'> обработку персональных данных</Link>*
								</span>
							</label>
						</div>
					</div>

					<div>
						<Button type='submit' width='w100' disabled={loading || !isValid}>
							{loading ? 'Отправка...' : 'Заявка на проект'}
							<Icon color='white'>
								<RiArrowRightUpLine size='1.5rem' />
							</Icon>
						</Button>
					</div>

					{error && <div className={s.formError}>{error}</div>}
					{!error && errorMessage && <div className={s.formError}>{errorMessage}</div>}
				</Form>
			)}
		</>
	);
};
