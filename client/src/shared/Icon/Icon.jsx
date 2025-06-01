import cn from 'classnames';
import s from './icon.module.scss';

export const Icon = ({
	className,
	children,
	viewBox = '0 0 24 24',
	size = '',
	color = '',
	width,
	height,
	...props
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			viewBox={viewBox}
			width={width || size}
			height={height || size}
			className={cn(s.icon, s[color], className)}
			{...props}>
			{children}
		</svg>
	);
};
