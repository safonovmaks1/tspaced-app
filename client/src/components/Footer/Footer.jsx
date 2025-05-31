import {
	RiCodeSSlashLine,
	RiInstagramLine,
	RiTelegramLine,
	RiWhatsappLine,
} from '@remixicon/react';
import cn from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import { useNavigationMenu } from '../../hooks';
import { Container, Icon, Logo } from '../../shared';
import s from './Footer.module.scss';

const links = [
	{ link: '/', title: 'Главная' },
	{ link: 'portfolio', title: 'Портфолио' },
	{ link: 'contact', title: 'Контакты' },
];

const socials = [
	{
		url: 'https://t.me/helloiamtanya13',
		icon: (
			<Icon size="28" color="color">
				<RiTelegramLine />
			</Icon>
		),
		ariaLabel: 'Telegram',
	},
	{
		url: 'https://wa.me/79818036636?text=Здравствуйте%2C+у+меня+есть+вопрос',
		icon: (
			<Icon size="28" color="color">
				<RiWhatsappLine />
			</Icon>
		),
		ariaLabel: 'Whatsup',
	},
	{
		url: 'https://www.instagram.com/tspaced',
		icon: (
			<Icon size="28" color="color">
				<RiInstagramLine />
			</Icon>
		),
		ariaLabel: 'Instagram',
	},
];

export const Footer = () => {
	const { handleMenuLinkClick } = useNavigationMenu();

	return (
		<footer className={s.footer}>
			<Container className={s.footerContainer}>
				<div className={s.footerContentContainer}>
					<div className={s.footerContent}>
						<NavLink to="/" className={s.footerLogo}>
							<Logo width="140px" />
						</NavLink>
					</div>

					<div className={s.footerContent}>
						<ul className={s.footerNavList}>
							{links.map(({ link, title }) => (
								<li key={link} className={s.navItem}>
									<NavLink
										className={({ isActive }) =>
											cn(
												s.footerNavLink,
												isActive && s.footerLinkActive,
											)
										}
										to={link}
										onClick={handleMenuLinkClick}>
										{title}
									</NavLink>
								</li>
							))}
						</ul>
					</div>

					<div className={s.footerContent}>
						<div className={s.footerSocials}>
							{socials.map((social, index) => (
								<Link
									key={index}
									href={social.url}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={social.ariaLabel}
									className={s.footerSocialsLink}>
									{social.icon}
								</Link>
							))}
						</div>
					</div>
				</div>

				<div className={s.footerCopy}>
					<div>© 2024 «TSpace» All rights reserved</div>
					<div className={s.footerDev}>
						Разработал:{' '}
						<Link
							to="https://t.me/MaksSafonov"
							target="_blank"
							rel="noopener noreferrer">
							<Icon size="20" color="darken">
								<RiCodeSSlashLine />
							</Icon>
							Maksim Safonov
						</Link>
					</div>
				</div>
			</Container>
		</footer>
	);
};
