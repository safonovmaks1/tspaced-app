import cn from 'classnames';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Button } from '../Button/Button';
// import { Button } from '../../shared';
import { Button } from '../../ui';
import s from './Cookies.module.scss';

const cookieStorage = {
	getItem: (key) => {
		const cookies = document.cookie
			.split(';')
			.map((cookie) => cookie.split('='))
			.reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
		return cookies[key];
	},
	setItem: (key, value) => {
		document.cookie = `${key}=${value};expires=Sun, 16 Jul 3567 06:23:41 GMT`;
	},
};

export const CookieConsent = () => {
	const [isVisible, setIsVisible] = useState(false);
	const consentPropertyType = 'site_consent';

	useEffect(() => {
		const hasConsent = cookieStorage.getItem(consentPropertyType) === 'true';
		setIsVisible(!hasConsent);
	}, []);

	const handleAccept = () => {
		cookieStorage.setItem(consentPropertyType, 'true');
		setIsVisible(false);
	};

	const handleDecline = () => {
		cookieStorage.setItem(consentPropertyType, 'false');
		setIsVisible(false);
	};

	return (
		<div className={cn(s.cookies, { [s.cookiesActive]: isVisible })}>
			<p className={s.cookiesText}>
				Пользуясь нашим сайтом, вы&nbsp;соглашаетесь с тем, что&ensp;
				<Link to='/privacy'>мы&nbsp;используем cookies</Link>
				&nbsp;🍪
			</p>

			<div className={s.cookiesButtons}>
				<Button color='white' className={s.cookiesButton} onClick={handleAccept}>
					Принять
				</Button>
				<Button color='white' className={s.cookiesButton} onClick={handleDecline}>
					&#x2717;
				</Button>
			</div>
		</div>
	);
};
