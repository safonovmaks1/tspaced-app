import { ScrollManager } from '@/utils';
import { Outlet } from 'react-router-dom';
import { CookieConsent, Footer, Header, Main, Modal, ScrollUp } from '../components';

export const Root = () => {
	return (
		<div className='App'>
			<ScrollManager />
			<Header />
			<Main>
				<Outlet />
			</Main>
			<Footer />
			<ScrollUp />
			<CookieConsent />
			<Modal />
		</div>
	);
};
