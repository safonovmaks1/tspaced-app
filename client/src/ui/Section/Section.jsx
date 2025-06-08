import cn from 'classnames';
import s from './Section.module.scss';

export const Section = ({ className, children, id }) => (
	<div className={cn(s.section, className)} id={id}>
		{children}
	</div>
);
