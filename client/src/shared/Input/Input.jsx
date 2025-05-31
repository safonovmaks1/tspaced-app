import cn from 'classnames';
import { forwardRef } from 'react';
import s from './Input.module.scss';

export const Input = forwardRef(({ className, ...props }, ref) => {
	return <input className={cn(s.input, className)} {...props} ref={ref} />;
});
