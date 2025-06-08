import { useEffect, useState } from 'react';
import { Accordion, LoaderText } from '../../../../components';
import { Container, Section, Title } from '../../../../ui';
import { request } from '../../../../utils';
import s from './QuestionsSections.module.scss';

export const QuestionsSections = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [faqs, setFaqs] = useState([]);

	useEffect(() => {
		request(`/faqs`).then(({ data: { faqs } }) => {
			setFaqs(faqs);
			setIsLoading(false);
		});
	}, []);

	return (
		<Section className={s.question}>
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
