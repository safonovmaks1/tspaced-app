import { Link } from 'react-router-dom';

export const ScrollLink = ({ to, children, className }) => (
	<Link href={`${to}`} className={className}>
		{children}
	</Link>
);
