import { yupResolver } from '@hookform/resolvers/yup';
import { RiArrowRightUpLine } from '@remixicon/react';
import cn from 'classnames';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Button, Icon, Input } from '../../../../../../ui';
import s from './ContactForm.module.scss';
import { schema } from './schema';

export const ContactForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		mode: 'onChange',
		defaultValues: {
			name: '',
			phone: '',
			message: '',
			messenger: 'telegram',
			agreement: false,
		},
	});

	const submitForm = (data) => {
		console.log(data);
		reset();
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
			<form className={s.form} onSubmit={handleSubmit(submitForm)}>
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
					<Button type='submit' width='w100'>
						Заявка на проект
						<Icon color='white'>
							<RiArrowRightUpLine size='1.5rem' />
						</Icon>
					</Button>
				</div>

				{errorMessage && <div className={s.formError}>{errorMessage}</div>}
			</form>
		</>
	);
};
