import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import {
	selectModalIsOpen,
	selectModalOnCancel,
	selectModalOnConfirm,
	selectModalText,
} from '@/store/selectors';
import { Button } from '@/ui';
import s from './Modal.module.scss';

export const Modal = () => {
	const isOpen = useSelector(selectModalIsOpen);
	const text = useSelector(selectModalText);
	const onConfirm = useSelector(selectModalOnConfirm);
	const onCancel = useSelector(selectModalOnCancel);

	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === 'Escape') onCancel();
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [onCancel]);

	if (!isOpen) {
		return null;
	}

	return (
		<div className={s.modal}>
			<div className={s.modalOverlay}></div>
			<div className={s.modalBox}>
				<h3 className={s.modalTitle}>{text}</h3>
				<div className={s.modalButtons}>
					<Button className={s.modalButton} onClick={onConfirm}>
						Да
					</Button>
					<Button className={s.modalButton} onClick={onCancel}>
						Отмена
					</Button>
				</div>
			</div>
		</div>
	);
};
