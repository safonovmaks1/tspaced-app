import { LoaderText, SlicedText } from '@/components';
import { Container, Icon, Section, Title } from '@/ui';
import b from '@/ui/Button/Button.module.scss';
import { request } from '@/utils';
import { RiArrowRightLine } from '@remixicon/react';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import s from './PortfolioSection.module.scss';
import './PortfolioSectionSwiper.css';

export const PortfolioSection = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		request(`/posts`).then(({ data: { posts } }) => {
			setPosts(posts);
			setIsLoading(false);
		});
	}, []);

	return (
		<Section className={s.portfolio}>
			<Container>
				<Title>Портфолио</Title>
				<div className={s.portfolioText}>Фрагменты моих избранных проектов</div>

				{isLoading ? (
					<LoaderText text='Загрузка данных...' />
				) : (
					<div className={s.portfolioSlider} style={{ textAlign: 'center' }}>
						<Swiper
							modules={[Navigation, Pagination, Autoplay]}
							loop={true}
							navigation={true}
							pagination={{ clickable: true, dynamicBullets: true }}
							autoplay={{
								delay: 4000,
								disableOnInteraction: false,
							}}
						>
							{posts.map(({ id, imageUrl, title, content, location, year }) => (
								<SwiperSlide>
									<article key={id} className={s.portfolioSliderContent}>
										<img className={s.portfolioSliderImages} src={imageUrl} alt={title} />

										<div className={s.portfolioSliderData}>
											<h3 className={s.portfolioSliderTitle}>{title}</h3>

											<SlicedText width={4} className={s.portfolioSliderText}>
												{content}
											</SlicedText>

											<div className={s.portfolioSliderInfo}>
												<span>{location}</span>
												<span>{year}</span>
											</div>

											<Link
												to={`/post/${id}`}
												className={cn(b.button, s.portfolioSliderButton)}
											>
												Смотреть проект
												<Icon color='white'>
													<RiArrowRightLine size='1.5rem' />
												</Icon>
											</Link>
										</div>
									</article>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				)}
			</Container>
		</Section>
	);
};
