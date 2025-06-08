import cn from 'classnames';
import s from './LoaderText.module.scss';

export const LoaderText = ({ text = '', color = '' }) => {
	return <div className={cn(s.loaderText, s[color])} data-text={text}></div>;
};
