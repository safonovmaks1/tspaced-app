import {
	RiInstagramLine,
	RiMailLine,
	RiPhoneLine,
	RiTelegramLine,
} from '@remixicon/react';
import { ContactForm } from '../../components';
import { Container, Icon, Section, Title } from '../../shared';
import s from './Contact.module.scss';

export const ContactPage = () => {
	return (
		<>
			<Section className={s.contact}>
				<Container>
					<Title>Мои контакты</Title>

					<div className={s.contactContainer}>
						<div className={s.contactData}>
							<div className={s.contactInfo}>
								<h3 className={s.contactInfoTitle}>
									Мой Telegram канал:
								</h3>

								<a
									href="https://t.me/tspacedesign"
									target="_blank"
									className={s.contactInfoLink}>
									<Icon size="1.5rem" color="darken">
										<RiTelegramLine />
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
									<Icon size="1.5rem" color="darken">
										<RiPhoneLine />
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
									<Icon size="1.5rem" color="darken">
										<RiMailLine />
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
									<Icon size="1.5rem" color="darken">
										<RiInstagramLine />
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
		</>
	);
};
