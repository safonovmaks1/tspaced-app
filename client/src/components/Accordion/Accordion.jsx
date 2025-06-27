import { Icon } from '@/ui';
import { RiArrowRightLine } from '@remixicon/react';
import cn from 'classnames';
import { useRef, useState } from 'react';
import s from './Accordion.module.scss';

const AccordionItem = ({ title, text, isOpen, onClick }) => {
	const contentHeight = useRef();

	return (
		<div className={s.accordionItem}>
			<div
				className={cn(s.accordionHeader, isOpen && s.accordionHeaderActive)}
				onClick={onClick}
				role='button'
			>
				<Icon color='darken' className={cn(s.accordionIcon)}>
					<RiArrowRightLine size='1.3rem' />
				</Icon>
				<h2 className={s.accordionTitle}>{title}</h2>
			</div>

			<div
				ref={contentHeight}
				className={cn(
					s.accordionContentContainer,
					isOpen && s.accordionContentContainerActive,
				)}
				style={
					isOpen ? { height: contentHeight.current.scrollHeight } : { height: '0px' }
				}
			>
				<p className={s.accordionText}>{text}</p>
			</div>
		</div>
	);
};

export const Accordion = ({ items }) => {
	const [activeIndex, setActiveIndex] = useState(null);

	const handleItemClick = (index) => {
		setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
	};

	return (
		<div className={s.accordion}>
			{items.map((item, index) => (
				<AccordionItem
					key={index}
					title={item.title}
					text={item.text}
					isOpen={activeIndex === index}
					onClick={() => handleItemClick(index)}
				/>
			))}
		</div>
	);
};
