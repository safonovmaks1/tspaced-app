import { ROLE } from '@/constants';
import { useNavigationMenu, useTheme } from '@/hooks';
import { logout } from '@/store/actions';
import { selectUserRole, selectUserSession } from '@/store/selectors';
import { Container, Icon, Logo } from '@/ui';
import { navLinks } from '@/utils';
import {
	RiArrowGoBackLine,
	RiCloseLine,
	RiLoginBoxLine,
	RiLogoutBoxLine,
	RiMenu4Line,
	RiMoonLine,
	RiSunLine,
} from '@remixicon/react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import s from './Navigation.module.scss';

export const Navigation = () => {
	const { theme, toggleTheme } = useTheme();
	const { isMenuOpen, handleMenuClose, handleMenuOpen, handleMenuLinkClick } =
		useNavigationMenu();

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);
	const session = useSelector(selectUserSession);
	const location = useLocation();

	const isHomePage = location.pathname === '/';

	const onLogout = () => {
		dispatch(logout(session));
		sessionStorage.removeItem('userData');
	};

	return (
		<Container className={s.navigation}>
			<NavLink to='/' className={s.navigationLogo}>
				<Logo width='140px' />
			</NavLink>

			<div className={cn(s.navigationMenu, isMenuOpen ? s.menuOpen : s.menuClosed)}>
				<ul className={s.navigationList}>
					{navLinks.map(({ link, title }) => (
						<li key={link} className={s.navigationItem}>
							<NavLink
								className={({ isActive }) =>
									cn(s.navigationLink, isActive && s.navigationLinkActive)
								}
								to={link}
								onClick={handleMenuLinkClick}
							>
								{title}
							</NavLink>
						</li>
					))}
				</ul>

				<div className={s.navigationClose} onClick={handleMenuClose}>
					<Icon color='darken'>
						<RiCloseLine size='27' />
					</Icon>
				</div>
			</div>

			<div className={s.navigationBtns}>
				{!isHomePage && (
					<div className={s.navigationIcon} onClick={() => navigate(-1)}>
						<Icon color='darken'>
							<RiArrowGoBackLine size='27' />
						</Icon>
					</div>
				)}

				{roleId === ROLE.GUEST ? (
					<Link to='/login' className={s.navigationIcon}>
						<Icon color='darken'>
							<RiLoginBoxLine size='27' />
						</Icon>
					</Link>
				) : (
					<Link className={s.navigationLogin} onClick={onLogout}>
						<Icon color='darken'>
							<RiLogoutBoxLine size='27' />
						</Icon>
					</Link>
				)}

				<div
					className={s.navigationIcon}
					onClick={toggleTheme}
					role='button'
					aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
				>
					{theme === 'light' ? (
						<Icon color='darken'>
							<RiSunLine size='27' />
						</Icon>
					) : (
						<Icon color='darken'>
							<RiMoonLine size='27' />
						</Icon>
					)}
				</div>
				<div className={s.navigationToggle} onClick={handleMenuOpen}>
					<Icon color='darken'>
						<RiMenu4Line size='27' />
					</Icon>
				</div>
			</div>
		</Container>
	);
};
