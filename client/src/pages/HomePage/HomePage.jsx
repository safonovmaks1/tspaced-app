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
