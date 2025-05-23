import { useChangeDocumentTitle } from '../../hooks';

export const Home = () => {
	useChangeDocumentTitle('My React App');

	return (
		<>
			<h1>
				TSpace — проектирую <br />
				пространство для Тебя
			</h1>
			<p>Дизайн квартир и загородных домов</p>
		</>
	);
};
