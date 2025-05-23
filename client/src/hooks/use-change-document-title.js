import { useEffect, useRef } from 'react';

export const useChangeDocumentTitle = (title) => {
	const originalTitle = useRef(document.title);

	useEffect(() => {
		const handleBlur = () => {
			document.title = title;
		};
		const handleFocus = () => {
			document.title = originalTitle.current;
		};

		window.addEventListener('blur', handleBlur);
		window.addEventListener('focus', handleFocus);

		return () => {
			window.removeEventListener('blur', handleBlur);
			window.removeEventListener('focus', handleFocus);
		};
	}, [title]);
};
