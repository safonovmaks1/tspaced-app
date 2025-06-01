import { Title } from '../../shared';

export const Error = ({ error }) => {
	return (
		error && (
			<div style={{ textAlign: 'center', fontSize: '1.2rem' }}>
				<Title>Ошибка</Title>
				<div>{error}</div>
			</div>
		)
	);
};
