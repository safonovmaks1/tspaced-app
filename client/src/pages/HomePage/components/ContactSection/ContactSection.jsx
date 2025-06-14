import {
	RiInstagramLine,
	RiMailLine,
	RiPhoneLine,
	RiTelegramLine,
} from '@remixicon/react';
import { Container, Icon, Section, Title } from '../../../../ui';
import s from './ContactSection.module.scss';
import { ContactForm } from './components';

export const ContactSection = () => {
	return (
		<Section className={s.contact}>
			<Container>
				<Title>Мои контакты</Title>

				<div className={s.contactContainer}>
					<div className={s.contactData}>
						<div className={s.contactInfo}>
							<h3 className={s.contactInfoTitle}>Мой Telegram канал:</h3>

							<a
								href="https://t.me/tspacedesign"
								target="_blank"
								className={s.contactInfoLink}>
								<Icon color="darken">
									<RiTelegramLine size="1.3rem" />
								</Icon>
								<span>TSpace | Interior Design</span>
							</a>
						</div>
						{/*  */}
						<div className={s.contactInfo}>
							<h3 className={s.contactInfoTitle}>Мой номер:</h3>

							<a
								href="tel:+79818036636"
								target="_blank"
								className={s.contactInfoLink}>
								<Icon color="darken">
									<RiPhoneLine size="1.3rem" />
								</Icon>
								<span>+7 981 803-66-36</span>
							</a>
						</div>
						{/*  */}
						<div className={s.contactInfo}>
							<h3 className={s.contactInfoTitle}>Моя почта:</h3>

							<a
								href="mailto:infotspaced@gmail.com"
								target="_blank"
								className={s.contactInfoLink}>
								<Icon color="darken">
									<RiMailLine size="1.3rem" />
								</Icon>
								<span>infotspaced@gmail.com</span>
							</a>
						</div>
						{/*  */}
						<div className={s.contactInfo}>
							<h3 className={s.contactInfoTitle}>Мой Instagram:</h3>

							<a
								href="https://www.instagram.com/tspaced"
								target="_blank"
								className={s.contactInfoLink}>
								<Icon color="darken">
									<RiInstagramLine size="1.3rem" />
								</Icon>
								<span>@tspaced</span>
							</a>
						</div>
					</div>
					<div className={s.contactForm}>
						<ContactForm />
					</div>
				</div>
			</Container>
		</Section>
	);
};
