import cn from 'classnames';
import s from './Title.module.scss';

export const Title = ({ className, children, color }) => {
	return <h2 className={cn(s.title, s[color], className)}>{children}</h2>;
};
