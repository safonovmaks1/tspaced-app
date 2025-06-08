import { useNavigate } from 'react-router-dom';

export const ScrollLink = ({ to, children, className }) => {
	const navigate = useNavigate();

	const handleClick = (e) => {
		e.preventDefault();

		if (to.startsWith('/')) {
			navigate(to);
		} else {
			document.getElementById(to)?.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<a href={`${to}`} className={className} onClick={handleClick}>
			{children}
		</a>
	);
};
