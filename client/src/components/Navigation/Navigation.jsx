import { RiCloseLine, RiMenu4Line, RiMoonLine, RiSunLine } from '@remixicon/react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { useNavigationMenu, useTheme } from '../../hooks';
import { Container, Icon, Logo } from '../../ui';
import { navLinks } from '../../utils';
import s from './Navigation.module.scss';

export const Navigation = () => {
	const { theme, toggleTheme } = useTheme();
	const { isMenuOpen, handleMenuClose, handleMenuOpen, handleMenuLinkClick } =
		useNavigationMenu();
	return (
		<Container className={s.navigation}>
			<NavLink to="/" className={s.navigationLogo}>
				<Logo width="140px" />
			</NavLink>

			<div className={cn(s.navigationMenu, isMenuOpen ? s.menuOpen : s.menuClosed)}>
				<ul className={s.navigationList}>
					{navLinks.map(({ link, title }) => (
						<li key={link} className={s.navigationItem}>
							<NavLink
								className={({ isActive }) =>
									cn(
										s.navigationLink,
										isActive && s.navigationLinkActive,
									)
								}
								to={link}
								onClick={handleMenuLinkClick}>
								{title}
							</NavLink>
						</li>
					))}
				</ul>

				<div className={s.navigationClose} onClick={handleMenuClose}>
					<Icon color="darken">
						<RiCloseLine size="30" />
					</Icon>
				</div>
			</div>

			<div className={s.navigationBtns}>
				<div
					className={s.navigationIcon}
					onClick={toggleTheme}
					role="button"
					aria-label={
						theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
					}>
					{theme === 'light' ? (
						<Icon color="darken">
							<RiSunLine size="30" />
						</Icon>
					) : (
						<Icon color="darken">
							<RiMoonLine size="30" />
						</Icon>
					)}
				</div>
				<div className={s.navigationToggle} onClick={handleMenuOpen}>
					<Icon color="darken">
						<RiMenu4Line size="30" />
					</Icon>
				</div>
			</div>
		</Container>
	);
};
