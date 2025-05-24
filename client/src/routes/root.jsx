import { Outlet } from 'react-router-dom';
import { CookieConsent, Footer, Header, Main } from '../components';

export const Root = () => {
	return (
		<div className="App">
			<Header />
			<Main>
				<Outlet />
			</Main>
			<Footer />
			<CookieConsent />
		</div>
	);
};
