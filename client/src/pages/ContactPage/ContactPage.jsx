import { ContactData, ContactForm } from '../../components';
import { Container, Section, Title } from '../../ui';
import s from './ContactPage.module.scss';

export const ContactPage = () => {
	return (
		<Section>
			<Container>
				<Title>Свяжитесь со мной</Title>
				<div className={s.gridContainer}>
					<ContactData />
					<ContactForm />
				</div>
			</Container>
		</Section>
	);
};
