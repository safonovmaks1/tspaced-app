import { ContactData, ContactForm } from '@/components';
import { Container, Section, Title } from '@/ui';
import s from './ContactSection.module.scss';

export const ContactSection = () => {
	return (
		<Section className={s.contact} id='contact'>
			<Container>
				<Title>Мои контакты</Title>
				<div className={s.contactContainer}>
					<ContactData />
					<ContactForm />
				</div>
			</Container>
		</Section>
	);
};
