import heroImages from '@/assets/images/hero.jpeg';
import { ScrollLink } from '@/components';
import { Container, Icon, ImageContainer, Section } from '@/ui';
import b from '@/ui/Button/Button.module.scss';
import { socialLinks } from '@/utils';
import { RiArrowRightDownLine } from '@remixicon/react';
import cn from 'classnames';
import s from './HeroSection.module.scss';
import { SocialPanel } from './components/SocialPanel/SocialPanel';

export const HeroSection = () => {
	return (
		<Section className={s.hero}>
			<Container className={s.heroContainer}>
				<ImageContainer className={s.heroImage}>
					<img
						src={heroImages}
						alt='TSpace — проектирую пространство для Тебя'
						loading='lazy'
					/>
				</ImageContainer>
				<div className={s.heroData}>
					<h1 className={s.heroTitle}>
						TSpace — проектирую <br />
						пространство для Тебя
					</h1>

					<div className={s.heroDescription}>
						<p>
							Создаю уникальные интерьеры, которые отражают индивидуальность и&nbsp;стиль
							жизни моих клиентов.
						</p>
					</div>

					<ScrollLink to='about' className={cn(b.button, s.heroLink)}>
						Обо мне
						<Icon color='white'>
							<RiArrowRightDownLine size='24' />
						</Icon>
					</ScrollLink>
				</div>

				<SocialPanel socials={socialLinks} />
			</Container>
		</Section>
	);
};
