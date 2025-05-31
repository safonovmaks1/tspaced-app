import { RiArrowRightDownLine, RiCheckboxFill } from '@remixicon/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import aboutImages from '../../../../assets/images/about.jpeg';
import {
	Container,
	Icon,
	ImageContainer,
	LoaderText,
	Section,
	Title,
} from '../../../../shared';
import { request } from '../../../../utils/request';
import s from './About.module.scss';

export const About = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [abouts, setAbouts] = useState([]);

	useEffect(() => {
		request(`/abouts`).then(({ data: { abouts } }) => {
			setAbouts(abouts);
			setIsLoading(false);
		});
	}, []);

	return (
		<Section id="about" className={s.about}>
			<Container className={s.aboutContainer}>
				<ImageContainer className={s.aboutImage}>
					<img
						src={aboutImages}
						alt="Дизайнер интерьера Санкт-Петербург"
						loading="lazy"
					/>
				</ImageContainer>

				<div className={s.aboutData}>
					<Title className={s.aboutTitle}>
						Дизайнер интерьера <br />
						Санкт-Петербург
					</Title>

					{isLoading ? (
						<LoaderText text='Загрузка данных...' />
					) : (
						<ul className={s.aboutList}>
							{abouts.map(({ id, text }) => (
								<li key={id} className={s.aboutListText}>
									<Icon size="16" color="white">
										<RiCheckboxFill />
									</Icon>
									<span>{text}</span>
								</li>
							))}
						</ul>
					)}

					<Link to="/contact" className={s.aboutLink}>
						Связаться со мной
						<Icon size="28" color="white">
							<RiArrowRightDownLine />
						</Icon>
					</Link>
				</div>
			</Container>
		</Section>
	);
};
