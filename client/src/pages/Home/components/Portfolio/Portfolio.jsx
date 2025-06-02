import { RiArrowRightLine } from '@remixicon/react';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {
	Container,
	Icon,
	LoaderText,
	Section,
	SlicedText,
	Title,
} from '../../../../shared';
import b from '../../../../shared/Button/Button.module.scss';
import { request } from '../../../../utils';
import s from './Portfolio.module.scss';
import './swiper.css';

export const Portfolio = () => {
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
					<LoaderText text="Загрузка данных..." />
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
							}}>
							{posts.map(
								({ id, imageUrl, title, content, location, year }) => (
									<SwiperSlide>
										<article
											key={id}
											className={s.portfolioSliderContent}>
											<img
												className={s.portfolioSliderImages}
												src={imageUrl}
												alt={title}
											/>

											<div className={s.portfolioSliderData}>
												<h3 className={s.portfolioSliderTitle}>
													{title}
												</h3>

												<SlicedText
													width={4}
													className={s.portfolioSliderText}>
													{content}
												</SlicedText>

												<div className={s.portfolioSliderInfo}>
													<span>{location}</span>
													<span>{year}</span>
												</div>

												<Link
													to={`/post/${id}`}
													className={cn(
														b.button,
														s.portfolioSliderButton,
													)}>
													Смотреть проект
													<Icon size="1.5rem" color="white">
														<RiArrowRightLine />
													</Icon>
												</Link>
											</div>
										</article>
									</SwiperSlide>
								),
							)}
						</Swiper>
					</div>
				)}
			</Container>
		</Section>
	);
};
