import { Container, Section, Title } from '../../ui';

export const ErrorPage = ({ error }) => {
	// const error = useRouteError();
	return (
		<Section>
			<Container>
				<div
					style={{
						marginTop: '4rem',
						textAlign: 'center',
					}}>
					<Title>404 | Cтраница не может быть найдена!</Title>
					<p>{error}</p>
				</div>
			</Container>
		</Section>
	);
};
