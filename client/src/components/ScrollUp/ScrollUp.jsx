import cn from 'classnames';
import { useEffect, useState } from 'react';

import s from './ScrollUp.module.scss';

export const ScrollUp = () => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		if (window.pageYOffset >= 250) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility);

		return () => {
			window.removeEventListener('scroll', toggleVisibility);
		};
	}, []);

	return (
		<div
			className={cn(s.scrollUp, isVisible ? s.scrollUpShow : s.scrollUpHide)}
			onClick={scrollToTop}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				className={s.scrollUpIcon}>
				<path d=" M 7 11 v 13 h 2 v -5 h 2 v 3 h 2 v -7 h 2 v 9 h 2 v -13 h 6 l -11 -11 l -11 11 Z"></path>
			</svg>
		</div>
	);
};
