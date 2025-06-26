import cn from 'classnames';
import s from './Icon.module.scss';

export const Icon = ({ className, children, color = '', ...props }) => {
	return (
		<span className={cn(s.icon, s[color], className)} {...props}>
			{children}
		</span>
	);
};
