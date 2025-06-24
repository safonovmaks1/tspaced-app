import cn from 'classnames';
import s from './Form.module.scss';

export const Form = ({ className, children, ...props }) => {
	return (
		<>
			<form className={cn(s.form, className)} {...props}>
				{children}
			</form>
		</>
	);
};
