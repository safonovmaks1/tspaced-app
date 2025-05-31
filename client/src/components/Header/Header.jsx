import { useState } from 'react';
import s from './Header.module.scss';
import { Navigation } from '../Navigation/Navigation'

export const Header = () => {
	const [headerFixed, setHeaderFixed] = useState(false);

	const handleScroll = () => {
		if (window.scrollY >= 80) {
			setHeaderFixed(true);
		} else {
			setHeaderFixed(false);
		}
	};
	window.addEventListener('scroll', handleScroll);

	return (
		<header className={headerFixed ? `${s.header} ${s.scrollHeader}` : s.header}>
			<Navigation />
		</header>
	);
};
