import { useChangeDocumentTitle } from '../../hooks';
import {
	AboutSection,
	ContactSection,
	HeroSection,
	PortfolioSection,
	PricesSection,
	QuestionsSections,
	ServicesSection,
	WorksSection,
} from './components';

export const HomePage = () => {
	useChangeDocumentTitle('Заказать дизайн-проект!');

	return (
		<>
			<HeroSection />
			<AboutSection />
			<ServicesSection />
			<PortfolioSection />
			<PricesSection />
			<WorksSection />
			<QuestionsSections />
			<ContactSection />
		</>
	);
};
