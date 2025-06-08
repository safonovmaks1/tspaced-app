import cn from 'classnames';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LoaderText } from '../../../../components';
import { Container, Icon, Section, Title } from '../../../../ui';
import b from '../../../../ui/Button/Button.module.scss';
import { request } from '../../../../utils';
import { PriceCard } from './components/PriceCard';
import s from './PricesSection.module.scss';
import { RiChat3Line } from '@remixicon/react'

export const PricesSection = () => {
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
							<Icon color="color">
								<RiChat3Line size="1.2rem" />
							</Icon>
						</Link>
					</div>
				</div>
			</Container>
		</Section>
	);
};
