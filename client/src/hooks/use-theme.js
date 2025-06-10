import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setTheme } from '../store/actions';
import { selectTheme } from '../store/selectors';

export const useTheme = () => {
	const dispatch = useDispatch();
	const theme = useSelector(selectTheme);

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme');
		const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light';

		const initialTheme = savedTheme || systemTheme;
		dispatch(setTheme(initialTheme));
	}, [dispatch]);

	useEffect(() => {
		if (theme) {
			document.documentElement.setAttribute('data-theme', theme);
			document.documentElement.style.colorScheme = theme;
			localStorage.setItem('theme', theme);
		}
	}, [theme]);

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		dispatch(setTheme(newTheme));
	};

	return { theme, toggleTheme };
};
