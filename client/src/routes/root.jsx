import { Outlet } from 'react-router-dom';
import { Footer, Header, Main } from '../components';

export const Root = () => {
	return (
		<div className="App">
			<Header />
			<Main>
				<Outlet />
			</Main>
			<Footer />
		</div>
	);
};
