import { RiArrowRightDownLine } from '@remixicon/react';
import heroImages from '../../../../assets/images/hero.jpeg';
import { Container, Icon, ImageContainer, Section } from '../../../../shared';
import b from '../../../../shared/Button/Button.module.scss';
import s from './Hero.module.scss';
import { SocialPanel } from './components/SocialPanel/SocialPanel';

export const ScrollLink = ({ to, children, className }) => (
	<a href={`${to}`} className={className}>
		{children}
	</a>
);

export const Hero = () => {
	return (
		<Section className={s.hero}>
			<Container className={s.heroContainer}>
				<ImageContainer className={s.heroImage}>
					<img
						src={heroImages}
						alt="TSpace — проектирую пространство для Тебя"
						loading="lazy"
					/>
				</ImageContainer>

				<div className={s.heroData}>
					<h1 className={s.heroTitle}>
						TSpace — проектирую <br />
						пространство для Тебя
					</h1>

					<div className={s.heroDescription}>
						<p>
							Создаю уникальные интерьеры, которые отражают индивидуальность
							и&nbsp;стиль жизни моих клиентов.
						</p>
					</div>

					<ScrollLink to="#about" className={b.button}>
						Обо мне
						<Icon size="28" color="white">
							<RiArrowRightDownLine />
						</Icon>
					</ScrollLink>
				</div>

				<SocialPanel />
			</Container>
		</Section>
	);
};
