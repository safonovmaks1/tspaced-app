import { useEffect, useState } from 'react';

import { Accordion } from '../../../../components';
import { Container, LoaderText, Section, Title } from '../../../../shared';
import { request } from '../../../../utils/request';
import s from './Faqs.module.scss';

export const Faqs = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [faqs, setFaqs] = useState([]);

	useEffect(() => {
		request(`/faqs`).then(({ data: { faqs } }) => {
			setFaqs(faqs);
			setIsLoading(false);
		});
	}, []);

	return (
		<Section className={s.faq}>
			<Container>
				<Title>Часто задаваемые вопросы</Title>

				{isLoading ? (
					<LoaderText text="Загрузка данных..." />
				) : (
					<Accordion items={faqs} />
				)}
			</Container>
		</Section>
	);
};
