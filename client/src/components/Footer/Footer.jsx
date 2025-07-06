import { useNavigationMenu } from '@/hooks';
import { Container, Icon, Logo, Section } from '@/ui';
import { navLinks, socialLinks } from '@/utils';
import { RiCodeSSlashLine } from '@remixicon/react';
import cn from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import s from './Footer.module.scss';

export const Footer = () => {
	const { handleMenuLinkClick } = useNavigationMenu();
	return (
		<footer className={s.footer}>
			<Section className={s.footerSection}>
				<Container>
					<div className={s.footerContainer}>
						<NavLink to='/' className={s.footerLogo}>
							<Logo width='140px' />
						</NavLink>

						<ul className={s.footerNavList}>
							{navLinks.map(({ link, title }) => (
								<li key={link} className={s.navItem}>
									<NavLink
										className={({ isActive }) =>
											cn(s.footerNavLink, isActive && s.footerNavLinkActive)
										}
										to={link}
										onClick={handleMenuLinkClick}
									>
										{title}
									</NavLink>
								</li>
							))}
						</ul>

						<div className={s.footerSocials}>
							{socialLinks.map((social, index) => (
								<a
									key={index}
									href={social.url}
									target='_blank'
									rel='noopener noreferrer'
									aria-label={social.ariaLabel}
									className={s.footerSocialsLink}
								>
									{social.icon}
								</a>
							))}
						</div>
					</div>

					<div className={s.footerContainer}>
						<div className={s.footerCopy}>
							&copy; {new Date().getFullYear()} «TSpace» All rights reserved.
						</div>

						<div className={s.footerDev}>
							Разработал:{' '}
							<a
								className={s.footerDevLink}
								href='https://t.me/MaksSafonov'
								target='_blank'
								rel='noopener noreferrer'
							>
								<Icon className={s.footerDevIcon} color='darken'>
									<RiCodeSSlashLine size='20' />
								</Icon>
								Maksim Safonov
							</a>
						</div>

						<div className={s.footerPolicy}>
							<NavLink
								className={s.footerDevLink}
								to='/privacy'
								rel='noopener noreferrer'
							>
								Политика конфиденциальности
							</NavLink>
						</div>
					</div>
				</Container>
			</Section>
		</footer>
	);
};
