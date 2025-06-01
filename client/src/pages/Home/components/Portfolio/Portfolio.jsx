import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Container, Section, Title } from '../../../../shared';
import s from './Portfolio.module.scss';
import './swiper.css';

export const Portfolio = () => {
	return (
		<Section className={s.portfolio}>
			<Container>
				<Title>Портфолио</Title>
				<div className={s.portfolioText}>Фрагменты моих избранных проектов</div>

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
						<SwiperSlide>1</SwiperSlide>
						<SwiperSlide>2</SwiperSlide>
						<SwiperSlide>3</SwiperSlide>
						<SwiperSlide>4</SwiperSlide>
						<SwiperSlide>5</SwiperSlide>
					</Swiper>
				</div>
			</Container>
		</Section>
	);
};
