import {
	RiArrowGoBackLine,
	RiCloseLine,
	RiFileEditLine,
	RiLoginCircleLine,
	RiLogoutCircleLine,
	RiMenu4Line,
	RiMoonLine,
	RiSunLine,
	RiUser2Line,
} from '@remixicon/react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../../actions';
import { ROLE } from '../../constants';
import { useNavigationMenu, useTheme } from '../../hooks';
import { selectUserLogin, selectUserRole, selectUserSession } from '../../selectors';
import { Container, Icon, Logo } from '../../shared';
import { checkAccess } from '../../utils';
import s from './Navigation.module.scss';

const links = [
	{ link: '/', title: 'Главная' },
	{ link: 'portfolio', title: 'Портфолио' },
	{ link: 'contact', title: 'Контакты' },
];

export const Navigation = () => {
	const { theme, toggleTheme } = useTheme();
	const { isMenuOpen, handleMenuClose, handleMenuOpen, handleMenuLinkClick } =
		useNavigationMenu();

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const session = useSelector(selectUserSession);

	const onLogout = () => {
		dispatch(logout(session));
		sessionStorage.removeItem('userData');
	};

	const isAdmin = checkAccess([ROLE.ADMIN], roleId);

	return (
		<Container className={s.nav}>
			<NavLink to="/" className={s.navLogo}>
				<Logo width="140px" />
			</NavLink>
			<div className={cn(s.navMenu, isMenuOpen ? s.menuOpen : s.menuClosed)}>
				<ul className={s.navList}>
					{links.map(({ link, title }) => (
						<li key={link} className={s.navItem}>
							<NavLink
								className={({ isActive }) =>
									cn(s.navLink, isActive && s.navLinkActive)
								}
								to={link}
								onClick={handleMenuLinkClick}>
								{title}
							</NavLink>
						</li>
					))}
				</ul>

				<div className={s.navClose} onClick={handleMenuClose}>
					<Icon size="28" color="darken">
						<RiCloseLine />
					</Icon>
				</div>
			</div>

			<div className={s.navBtns}>
				{isAdmin && (
					<>
						<div className={s.navIcon} onClick={() => navigate(-1)}>
							<Icon size="24" color="darken">
								<RiArrowGoBackLine />
							</Icon>
						</div>
						
						<Link to="/post" className={s.navIcon}>
							<Icon size="24" color="darken">
								<RiFileEditLine />
							</Icon>
						</Link>
						<Link to="/users" className={s.navIcon}>
							<Icon size="24" color="darken">
								<RiUser2Line />
							</Icon>
						</Link>
					</>
				)}

				{roleId === ROLE.GUEST ? (
					<Link to="/login" className={s.navIcon}>
						<Icon size="24" color="darken">
							<RiLoginCircleLine />
						</Icon>
					</Link>
				) : (
					<Link className={s.navLogin} onClick={onLogout}>
						{login}
						<Icon size="24" color="darken">
							<RiLogoutCircleLine />
						</Icon>
					</Link>
				)}

				<div
					className={s.navIcon}
					onClick={toggleTheme}
					role="button"
					aria-label={
						theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
					}>
					{theme === 'light' ? (
						<Icon size="24" color="darken">
							<RiSunLine />
						</Icon>
					) : (
						<Icon size="24" color="darken">
							<RiMoonLine />
						</Icon>
					)}
				</div>
				<div className={s.navToggle} onClick={handleMenuOpen}>
					<Icon size="24" color="darken">
						<RiMenu4Line />
					</Icon>
				</div>
			</div>
		</Container>
	);
};
