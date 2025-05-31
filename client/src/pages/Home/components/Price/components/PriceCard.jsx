import s from './PriceCard.module.scss';

export const PriceCard = ({ prices }) => {
	return (
		<>
			{prices.map((price, index) => (
				<article key={index} className={s.card}>
					<h3 className={s.cardTitle}>{price.title}</h3>
					<div className={s.cardPricing}>{price.price}/м²</div>

					<ul className={s.cardList}>
						{price.features.map((feature, index) => (
							<li key={index} className={s.cardListItem}>
								{feature}
							</li>
						))}
					</ul>
				</article>
			))}
		</>
	);
};
