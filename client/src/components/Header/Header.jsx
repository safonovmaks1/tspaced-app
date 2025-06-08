import { useEffect, useState } from 'react';
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
			<div>
				<h3 style={{ textAlign: 'center' }}>Welcome to My Website</h3>
			</div>
		</header>
	);
};
