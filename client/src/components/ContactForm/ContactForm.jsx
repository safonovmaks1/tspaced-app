import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { validateInputTel } from '../../utils';
// import { IconArrowRightUp, IconPhone, IconUser } from '../../../Icons';
import { RiArrowRightUpLine, RiPhoneLine, RiUser3Line } from '@remixicon/react';
import { Button, Icon, Input } from '../../shared';
import s from './ContactForm.module.scss';

const formScheme = yup.object().shape({
	name: yup.string().trim().required('Поле "Ваше Имя" обязательно для заполнения'),
	phone: yup
		.string()
		// .matches(/^\+?[1-9]\d{7,14}$/, 'Некорректный формат телефона')
		.required('Поле "Телефон" обязательно для заполнения'),
	message: yup
		.string()
		.trim()
		.min(10, 'Минимум 10 символов')
		.required('Поле "Описание проекта" обязательно для заполнения'),
	messenger: yup.string().required('Выберите мессенджер для связи'),
	agreement: yup.boolean().oneOf([true], 'Необходимо ваше согласие'),
});

export const ContactForm = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: '',
			phone: '',
			messenger: 'telegram',
			message: '',
			agreement: false,
		},
		resolver: yupResolver(formScheme),
		mode: 'onBlur',
	});

	useEffect(() => {
		validateInputTel();
	}, []);

	const onSubmit = (data) => {
		alert(JSON.stringify(data));
		reset({
			name: '',
			phone: '',
			messenger: 'telegram',
			message: '',
			agreement: false,
		});
	};

	const formError =
		errors?.name?.message ||
		errors?.phone?.message ||
		errors?.messenger?.message ||
		errors?.message?.message ||
		errors?.agreement?.message;

	const errorMessage = formError;

	return (
		<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={s.formGroups}>
				<div className={s.formItem}>
					<div className={s.formField}>
						<label className={s.formLabel} htmlFor="name">
							Ваше Имя*
						</label>
						<Input
							type="text"
							id="name"
							className={s.formInput}
							{...register('name')}
						/>
						<Icon size="1.5rem" color="darken">
							<RiUser3Line />
						</Icon>
					</div>
				</div>

				<div className={s.formItem}>
					<div className={s.formField}>
						<label className={s.formLabel} htmlFor="phone">
							Ваш номер телефона*
						</label>
						<Input
							type="tel"
							id="phone"
							className={s.formInput}
							{...register('phone')}
						/>
						<Icon size="1.5rem" color="darken">
							<RiPhoneLine />
						</Icon>
					</div>
				</div>
			</div>

			<div className={s.formItem}>
				<div className={s.formField}>
					<label className={s.formLabel}>Мессенджер для связи:</label>
					<div className={cn(s.formInput, s.options)}>
						<div className={s.optionsItem}>
							<input
								id="telegram"
								type="radio"
								value="telegram"
								name="messenger"
								className={s.optionsInput}
								{...register('messenger')}
								defaultChecked
							/>
							<label className={s.optionsLabel} htmlFor="telegram">
								<span>Telegram</span>
							</label>
						</div>
						{/*  */}
						<div className={s.optionsItem}>
							<input
								id="whatsapp"
								type="radio"
								value="whatsapp"
								name="messenger"
								className={s.optionsInput}
								{...register('messenger')}
							/>
							<label className={s.optionsLabel} htmlFor="whatsapp">
								<span>WhatsApp</span>
							</label>
						</div>
					</div>
				</div>
			</div>

			<div className={s.formItem}>
				<div className={s.formField}>
					<label className={s.formLabel} htmlFor="message">
						Описание вашего проекта*
					</label>
					<textarea
						id="message"
						name="message"
						className={s.formInput}
						{...register('message')}></textarea>
				</div>
			</div>

			<div className={s.formItem}>
				<input
					id="formAgreement"
					type="checkbox"
					name="agreement"
					className={s.formCheck}
					{...register('agreement')}
				/>
				<label htmlFor="formAgreement" className={s.formCheckLabel}>
					<span>
						Я даю свое согласие на
						<Link to="/privacy"> обработку персональных данных</Link>*
					</span>
				</label>
			</div>

			<div>
				<Button type="submit" width="w100" disabled={!!formError}>
					Заявка на проект
					<Icon size="1.5rem" color="white">
						<RiArrowRightUpLine />
					</Icon>
				</Button>
			</div>
			{errorMessage && <div className={s.formError}>{errorMessage}</div>}
			<div className={s.formText}></div>
		</form>
	);
};
