import { useChangeDocumentTitle } from '../../hooks';
import { About, Faqs, Hero, Portfolio, Price, Service, Works } from './components';

export const Home = () => {
	useChangeDocumentTitle('Заказать дизайн-проект!');

	return (
		<>
			<Hero />
			<About />
			<Service />
			<Portfolio />
			<Price />
			<Works />
			<Faqs />
		</>
	);
};
