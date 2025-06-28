import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollManager = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
		document.documentElement.scrollTop = 0;
		document.body.scrollTop = 0;
	}, [pathname]);

	return null;
};
