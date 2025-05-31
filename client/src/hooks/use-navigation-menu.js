import { useEffect, useState } from 'react';

export const useNavigationMenu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleMenuEscape = (e) => {
			if (e.key === 'Escape') setIsMenuOpen(false);
		};

		window.addEventListener('keydown', handleMenuEscape);

		return () => {
			window.removeEventListener('keydown', handleMenuEscape);
		};
	}, []);

	const handleMenuClose = () => {
		setIsMenuOpen(false);
	};

	const handleMenuOpen = () => {
		setIsMenuOpen(true);
	};

	const handleMenuLinkClick = () => {
		setIsMenuOpen(false);
	};

	return { isMenuOpen, handleMenuClose, handleMenuOpen, handleMenuLinkClick };
};
