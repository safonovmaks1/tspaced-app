import { useRouteError } from 'react-router-dom';
import { Container, Section, Title } from '../../shared';

export const ErrorPage = () => {
	const error = useRouteError();

	return (
		<Section>
			<Container>
				<div
					style={{
						textAlign: 'center',
					}}>
					<Title>404 | Cтраница не может быть найдена!</Title>
					<p>{error?.message ?? 'Неизвестная ошибка!'}</p>
				</div>
			</Container>
		</Section>
	);
};
