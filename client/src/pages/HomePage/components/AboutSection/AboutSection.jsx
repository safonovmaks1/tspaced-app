import aboutImages from '@/assets/images/about.jpeg';
import { LoaderText } from '@/components';
import { Container, Icon, ImageContainer, Section, Title } from '@/ui';
import { request } from '@/utils';
import { RiArrowRightDownLine, RiCheckboxFill } from '@remixicon/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import s from './AboutSection.module.scss';

export const AboutSection = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [abouts, setAbouts] = useState([]);

	useEffect(() => {
		request(`/abouts`).then(({ data: { abouts } }) => {
			setAbouts(abouts);
			setIsLoading(false);
		});
	}, []);

	return (
		<Section id='about' className={s.about}>
			<Container className={s.aboutContainer}>
				<ImageContainer className={s.aboutImage}>
					<img
						src={aboutImages}
						alt='Дизайнер интерьера Санкт-Петербург'
						loading='lazy'
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
									<Icon color='white'>
										<RiCheckboxFill size='18' />
									</Icon>
									<span className={s.aboutListDescr}>{text}</span>
								</li>
							))}
						</ul>
					)}

					<Link to='/contact' className={s.aboutLink}>
						Связаться со мной
						<Icon color='white'>
							<RiArrowRightDownLine size='28' />
						</Icon>
					</Link>
				</div>
			</Container>
		</Section>
	);
};
