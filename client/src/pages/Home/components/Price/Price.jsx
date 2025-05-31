import { RiChat3Line } from '@remixicon/react';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Icon, LoaderText, Section, Title } from '../../../../shared';
import b from '../../../../shared/Button/Button.module.scss';
import { request } from '../../../../utils/request';
import { PriceCard } from './components/PriceCard';
import s from './Prices.module.scss';

export const Price = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [prices, setPrices] = useState([]);

	useEffect(() => {
		request(`/prices`).then(({ data: { prices } }) => {
			setPrices(prices);
			setIsLoading(false);
		});
	}, []);

	return (
		<Section className={s.prices}>
			<Container>
				<div className={s.pricesBg}>
					<Title color="white">Мои тарифы</Title>

					<div className={s.pricesCard}>
						{isLoading ? (
							<LoaderText text="Загрузка данных..." color="white" />
						) : (
							<div className={s.pricesCardContainer}>
								<PriceCard prices={prices} />
							</div>
						)}
					</div>

					<div className={s.pricesButton}>
						<Link to="/contact" className={cn(b.button, b.white)}>
							Связаться со мной
							<Icon size="1.2rem" color="color">
								<RiChat3Line />
							</Icon>
						</Link>
					</div>
				</div>
			</Container>
		</Section>
	);
};
