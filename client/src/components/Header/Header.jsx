import { useEffect, useState } from 'react';
import { AdminPanel } from '../AdminPanel/AdminPanel';
import { Navigation } from '../Navigation/Navigation';
import s from './Header.module.scss';

export const Header = () => {
	const [headerFixed, setHeaderFixed] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setHeaderFixed(window.scrollY >= 80);
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header className={headerFixed ? `${s.header} ${s.scrollHeader}` : s.header}>
			<Navigation />
			<AdminPanel />
		</header>
	);
};
