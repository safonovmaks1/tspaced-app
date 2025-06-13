import { Title } from '../../ui';

export const Error = ({ error }) => {
	return (
		error && (
			<div style={{ textAlign: 'center', fontSize: '1.2rem' }}>
				<Title>Ошибка</Title>
				<p>{error}</p>
			</div>
		)
	);
};
