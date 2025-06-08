import cn from 'classnames';
import s from './Button.module.scss';

export const Button = ({ className, children, width = '', color = '', ...props }) => {
	return (
		<button className={cn(s.button, s[width], s[color], className)} {...props}>
			{children}
		</button>
	);
};
