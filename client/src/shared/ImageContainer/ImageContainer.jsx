import cn from 'classnames';
import s from './ImageContainer.module.scss';

export const ImageContainer = ({ className, children }) => {
	return <div className={cn(s.imageContainer, className)}>{children}</div>;
};
