import { RiArrowRightDownLine } from '@remixicon/react';
import heroImages from '../../../../assets/images/hero.jpeg';
import { Icon, ImageContainer } from '../../../../components';
import b from '../../../../components/Button/Button.module.scss';
import { Container, Section } from '../../../../shared';
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
							и&nbsp;стиль жизни своих клиентов.
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
