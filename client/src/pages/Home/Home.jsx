import { useChangeDocumentTitle } from '../../hooks';
import { Hero } from './components';

export const Home = () => {
	useChangeDocumentTitle('My React App');

	return (
		<>
			<Hero />
		</>
	);
};
