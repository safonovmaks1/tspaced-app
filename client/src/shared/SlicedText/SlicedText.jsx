import cn from 'classnames';
import s from './SlicedText.module.scss';

export const SlicedText = ({ className, children, width = '' }) => {
	return (
		<p className={cn(s.slicedText, className, s[width])} style={{ '--width': width }}>
			{children}
		</p>
	);
};
